/* eslint-disable no-undef */
import React from 'react';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/src/shared/ui/button';
import { Label } from '@/src/shared/ui/label';
import { Input } from '@/src/shared/ui/input';
import { Textarea } from '@/src/shared/ui/textarea';
import supabase from '@/src/shared/api/SupaBase';
// import supabase from '@/src/shared/api/SupaBase';
// import Image from 'next/image';

interface EditingProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  material: string;
  type: string;
  full_description: string;
}

const Form: FC<{
  product: EditingProduct;
  setProductos: React.Dispatch<React.SetStateAction<EditingProduct[]>>;
}> = ({ product, setProductos }) => {
  const { register, handleSubmit } = useForm<EditingProduct>({
    defaultValues: product,
  });

  const onSubmit = async (data: EditingProduct) => {
    const { error } = await supabase
      .from('products')
      .update(data)
      .eq('id', product.id);

    if (error) {
      alert(`Ошибка обновления: ${error.message}`);
    } else {
      alert('Данные успешно обновлены');

      // Обновляем состояние продуктов
      setProductos((prevProducts) =>
        prevProducts.map((p) => (p.id === product.id ? { ...p, ...data } : p)),
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-row gap-1">
        {/* <Image alt="product" width={100} height={100} /> */}
      </div>
      <div>
        <Label htmlFor="name">Название</Label>
        <Input type="text" id="name" required {...register('name')} />
      </div>
      <div>
        <Label htmlFor="description">Описание</Label>
        <Input
          type="text"
          id="description"
          required
          {...register('description')}
        />
      </div>
      <div>
        <Label htmlFor="full_description">Полное описание</Label>
        <Textarea
          id="full_description"
          required
          {...register('full_description')}
          style={{ height: '150px' }}
        />
      </div>
      <div>
        <Label htmlFor="price">Цена</Label>
        <Input type="number" id="price" required {...register('price')} />
      </div>
      <div>
        <Label htmlFor="color">Цвет</Label>
        <Input type="text" id="color" required {...register('color')} />
      </div>
      <div>
        <Label htmlFor="material">Материал</Label>
        <Input type="text" id="material" required {...register('material')} />
      </div>
      <div>
        <Label htmlFor="type">Тип</Label>
        <Input type="text" id="type" required {...register('type')} />
      </div>
      <Button type="submit">Сохранить</Button>
    </form>
  );
};

export default Form;
