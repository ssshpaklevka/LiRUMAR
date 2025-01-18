'use client';

import type { FC } from 'react';
import React, { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/shared/ui/dialog';
import { Button } from '@/src/shared/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/shared/ui/table';
import Container from '@/src/shared/ui/containers/Container';

import EditProduct from './features/EditProduct';
import DeleteProduct from './features/DeleteProduct';

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

interface ProductTableProps {
  products: Product[];
}

const ProductTable: FC<ProductTableProps> = ({ products }) => {
  const [productos, setProductos] = useState<Product[]>(products);
  // const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  // const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);

  //   const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
  //     const productWithId: Product = { ...newProduct, id: Date.now().toString() };
  //     setProducts((prevProducts) => [...prevProducts, productWithId]);
  //     setIsAddDialogOpen(false);
  //   };

  //   const handleImportExcel = async (event: ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0];
  //     if (file) {
  //       const importedProducts = await readExcelFile(file);
  //       setProducts((prevProducts) => [
  //         ...prevProducts,
  //         ...(importedProducts as Product[]),
  //       ]);
  //     }
  //   };

  return (
    <Container className=" mx-auto">
      <div className="flex justify-between mb-4">
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>Добавить продукт</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Добавить новый продукт</DialogTitle>
            </DialogHeader>
            {/* <AddProductForm /> */}
          </DialogContent>
        </Dialog>
        {/* <Input type="file" accept=".xlsx, .xls" onChange={handleImportExcel} /> */}
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
            <TableHead className="max-w-[100px]">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productos.map((producto) => (
            <TableRow key={producto.id}>
              <TableCell>{producto.name}</TableCell>
              <TableCell>{producto.description}</TableCell>
              <TableCell>{producto.price}</TableCell>
              <TableCell>{producto.color}</TableCell>
              <TableCell>{producto.material}</TableCell>
              <TableCell>{producto.type}</TableCell>
              <TableCell className="max-w-[100px]">
                <EditProduct
                  product={producto as Product}
                  setProductos={setProductos}
                />
                <DeleteProduct id={producto.id} setProductos={setProductos} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ProductTable;
