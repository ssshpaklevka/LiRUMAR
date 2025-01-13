import type { FC } from 'react';
import React from 'react';
import { notFound } from 'next/navigation';

import Product from '@/src/pages/product/Product';
import supabase from '@/src/shared/api/SupaBase';
import type { Product as ProductInterface } from '@/src/entities/product/product.interface';
import CarouselProduct from '@/src/shared/ui/carousel-product/CarouselProduct';

const getProduct = async (id: string): Promise<ProductInterface | null> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();
  if (error || !data) {
    return null;
  }
  return data as ProductInterface;
};

const Page: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const id = (await params).id;
  const prod = await getProduct(id);
  if (!prod) {
    notFound();
  }
  return (
    <div className="flex justify-center items-center flex-col gap-[97px]">
      <Product product={prod} />

      <CarouselProduct />
    </div>
  );
};

export default Page;
