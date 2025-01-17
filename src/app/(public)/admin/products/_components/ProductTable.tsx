'use client';

import type { ChangeEvent, FC } from 'react';
import React, { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/shared/ui/dialog';
import { Button } from '@/src/shared/ui/button';
import { Input } from '@/src/shared/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/shared/ui/table';
import { Label } from '@/src/shared/ui/label';

import AddProductForm from './AddProductForm';
import { readExcelFile } from '../utils/excel-utils';

export interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string;
  price: number;
  color: string;
  material: string;
  type: string;
}

const ProductTable: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);

  // const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
  //   const productWithId: Product = { ...newProduct, id: Date.now().toString() };
  //   setProducts((prevProducts) => [...prevProducts, productWithId]);
  //   setIsAddDialogOpen(false);
  // };

  const handleEditProduct = (editedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === editedProduct.id ? editedProduct : p)),
    );
    setIsEditDialogOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  const handleImportExcel = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const importedProducts = await readExcelFile(file);
      setProducts((prevProducts) => [
        ...prevProducts,
        ...(importedProducts as Product[]),
      ]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>Добавить продукт</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Добавить новый продукт</DialogTitle>
            </DialogHeader>
            <AddProductForm />
          </DialogContent>
        </Dialog>
        <Input type="file" accept=".xlsx, .xls" onChange={handleImportExcel} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
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
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell>{product.material}</TableCell>
              <TableCell>{product.type}</TableCell>
              <TableCell>
                <Dialog
                  open={isEditDialogOpen}
                  onOpenChange={setIsEditDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="mr-2"
                      onClick={() => setEditingProduct(product)}
                    >
                      Изменить
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Редактировать продукт</DialogTitle>
                    </DialogHeader>
                    {editingProduct && (
                      <ProductForm
                        onSubmit={(product: Product) =>
                          handleEditProduct({
                            ...product,
                            id: editingProduct.id,
                          })
                        }
                        initialData={editingProduct}
                      />
                    )}
                  </DialogContent>
                </Dialog>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  initialData?: Product;
}

function ProductForm({ onSubmit, initialData }: ProductFormProps) {
  const [formData, setFormData] = useState<Product>(
    initialData || {
      id: '',
      name: '',
      description: '',
      full_description: '',
      price: 0,
      color: '',
      material: '',
      type: '',
    },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key}>
          <Label htmlFor={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Label>
          <Input
            type={key === 'price' ? 'number' : 'text'}
            id={key}
            name={key}
            value={value}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <Button type="submit">Сохранить</Button>
    </form>
  );
}

export default ProductTable;
