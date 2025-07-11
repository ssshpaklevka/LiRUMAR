'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/src/shared/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/shared/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/shared/ui/dialog';
import Container from '@/src/shared/ui/containers/Container';

import ProductForm from './ProductForm';

interface ProductImage {
  id: string;
  filename: string;
  path: string;
  order: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string;
  price: number;
  color: string;
  material: string;
  type: string;
  url: string;
  images: ProductImage[];
  createdAt: string;
  updatedAt: string;
}

interface ProductsManagerProps {
  initialProducts: Product[];
}

export default function ProductsManager({
  initialProducts,
}: ProductsManagerProps): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredProducts = products;

  const handleDeleteProduct = async (id: string): Promise<void> => {
    if (!confirm('Вы уверены, что хотите удалить этот продукт?')) {
      return;
    }

    try {
      const response = await fetch('/api/products', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setProducts(products.filter((p) => p.id !== id));
      } else {
        alert('Ошибка удаления продукта');
      }
    } catch {
      alert('Ошибка сети');
    }
  };

  const handleProductAdded = (newProduct: Product): void => {
    setProducts([newProduct, ...products]);
    setIsAddDialogOpen(false);
  };

  const handleProductUpdated = (updatedProduct: Product): void => {
    console.log(
      'Updating product:',
      updatedProduct.id,
      'with images:',
      updatedProduct.images,
    );
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
    );
  };

  return (
    <Container className="py-8 px-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link href="/">
            <Button variant="outline">← На главную</Button>
          </Link>
          <h1 className="text-3xl font-bold mt-4">Управление продуктами</h1>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>Добавить продукт</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Добавить новый продукт</DialogTitle>
            </DialogHeader>
            <ProductForm onSuccess={handleProductAdded} />
          </DialogContent>
        </Dialog>
      </div>

      <div className=" rounded-lg shadow bg-background!">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Изображение</TableHead>
              <TableHead>Название</TableHead>
              <TableHead>Описание</TableHead>
              <TableHead>Цена</TableHead>
              <TableHead>Цвет</TableHead>
              <TableHead>Материал</TableHead>
              <TableHead>Тип</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  {product.images && product.images.length > 0 && (
                    <img
                      src={product.images[0].path}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {product.description}
                </TableCell>
                <TableCell>{product.price.toLocaleString('ru-RU')} ₽</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.material}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Изменить
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Редактировать продукт</DialogTitle>
                        </DialogHeader>
                        <ProductForm
                          product={product}
                          onSuccess={handleProductUpdated}
                        />
                      </DialogContent>
                    </Dialog>
                    <Button
                      className="bg-red-500/10 text-white! hover:bg-red-500/50! hover:text-white!"
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Удалить
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
}
