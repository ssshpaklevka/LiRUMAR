import type { FC } from 'react';
import React from 'react';
import { notFound } from 'next/navigation';

import Product from '@/src/pages/product/Product';
import type { Product as ProductInterface } from '@/src/entities/product/product.interface';
import CarouselProduct from '@/src/shared/ui/carousel-product/CarouselProduct';

const getProduct = async (id: string): Promise<ProductInterface | null> => {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);

    if (!response.ok) {
      return null;
    }

    const product: ProductInterface = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

const Page: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const id = (await params).id;
  const prod = await getProduct(id);
  if (!prod) {
    notFound();
  }
  return (
    <div className="flex justify-center items-center flex-col gap-[92px] sm:gap-[120px] md:gap-[97px] 2xl:gap-[146px]">
      <Product product={prod} />

      <CarouselProduct />
    </div>
  );
};

export default Page;
