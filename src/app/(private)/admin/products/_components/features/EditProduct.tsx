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

import Form from './Form';
interface EditingProduct {
  id: string;
  name: string;
  description: string;
  full_description: string;
  price: number;
  color: string;
  material: string;
  type: string;
}
interface EditProductProps {
  product: EditingProduct;
  setProductos: React.Dispatch<React.SetStateAction<EditingProduct[]>>;
}

const EditProduct: FC<EditProductProps> = ({ product, setProductos }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  return (
    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
      <DialogTrigger asChild>
        <Button className="mr-2" onClick={() => setIsEditDialogOpen(true)}>
          Изменить
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Редактировать продукт</DialogTitle>
        </DialogHeader>
        <Form product={product} setProductos={setProductos} />
      </DialogContent>
    </Dialog>
  );
};

export default EditProduct;
