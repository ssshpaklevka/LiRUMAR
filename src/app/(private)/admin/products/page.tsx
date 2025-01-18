import type { FC } from 'react';
import React from 'react';

import supabase from '@/src/shared/api/SupaBase';

import type { Product } from './_components/ProductTable';
import ProductTable from './_components/ProductTable';

const getProductList = async (): Promise<Product[]> => {
  let query = supabase.from('products').select('*');
  const { data, error } = await query;
  if (error) {
    return [];
  }
  return data as Product[];
};

const Page: FC = async () => {
  const products = await getProductList();
  return (
    <div className="min-h-screen p-5">
      <ProductTable products={products} />
    </div>
  );
};

export default Page;
