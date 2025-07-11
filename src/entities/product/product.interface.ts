export interface ProductImage {
  id: string;
  filename: string;
  path: string;
  order: number;
}

export interface Product {
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
