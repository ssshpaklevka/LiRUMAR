'use client';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import supabase from '@/src/shared/api/SupaBase';
import ProductCard from '@/src/shared/ui/product-card/ProductCard';
import SkeletonProduct from '@/src/shared/ui/product-card/SkeletonProduct';

interface Filters {
  type: string[];
  material: string[];
  color: string[];
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
}

interface ProductListProps {
  filters: Filters;
}

const getProductList = async (filters: Filters): Promise<Product[]> => {
  let query = supabase.from('products').select('*');

  if (filters.color.length > 0) {
    query = query.in('color', filters.color);
  }
  if (filters.material.length > 0) {
    query = query.in('material', filters.material);
  }
  if (filters.type.length > 0) {
    query = query.in('type', filters.type);
  }

  const { data, error } = await query;

  if (error) {
    return [];
  }

  return data as Product[];
};

const ProductList: FC<ProductListProps> = ({ filters }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const productList = await getProductList(filters);
      setProducts(productList);
      setLoading(false);
    };

    fetchProducts();
  }, [filters]);

  if (loading) {
    return (
      <div className="mt-[45px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[19px] gap-y-[30px] md:gap-x-[20px] md:gap-y-[40px] 2xl:gap-x-[32px] 2xl:gap-y-[60px]">
        {[...Array(8)].map((_, index) => (
          <SkeletonProduct key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      {products.length > 0 ? (
        <div className="mt-[45px] grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[19px] gap-y-[30px] md:gap-x-[20px] md:gap-y-[40px] 2xl:gap-x-[32px] 2xl:gap-y-[60px]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              url={product.url}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center col-span-full">
          Нет доступных товаров.
        </div>
      )}
    </>
  );
};

export default ProductList;
