/* eslint-disable no-undef */
import type { FC } from 'react';
import React from 'react';

import supabase from '@/src/shared/api/SupaBase';
import { Button } from '@/src/shared/ui/button';

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

const DeleteProduct: FC<{
  id: string;
  setProductos: React.Dispatch<React.SetStateAction<EditingProduct[]>>;
}> = ({ id, setProductos }) => {
  const handleDelete = async () => {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) {
      alert(`Ошибка удаления: ${error.message}`);
    } else {
      alert('Продукт успешно удален');
      setProductos((prevProducts) => prevProducts.filter((p) => p.id !== id));
    }
  };
  return (
    <Button variant="outline" onClick={handleDelete}>
      Удалить
    </Button>
  );
};

export default DeleteProduct;
