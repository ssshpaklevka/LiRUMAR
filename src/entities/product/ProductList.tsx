'use client';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

import ProductCard from '@/src/shared/ui/product-card/ProductCard';
import SkeletonProduct from '@/src/shared/ui/product-card/SkeletonProduct';
import type { Product } from '@/src/entities/product/product.interface';

interface Filters {
  type: string[];
  material: string[];
  color: string[];
}

interface ProductListProps {
  filters: Filters;
}

const getProductList = async (filters: Filters): Promise<Product[]> => {
  try {
    const response = await fetch('/api/products');

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const products: Product[] = await response.json();

    // Фильтруем продукты на клиенте
    return products.filter((product) => {
      const matchesColor =
        filters.color.length === 0 || filters.color.includes(product.color);
      const matchesMaterial =
        filters.material.length === 0 ||
        filters.material.includes(product.material);
      const matchesType =
        filters.type.length === 0 || filters.type.includes(product.type);

      return matchesColor && matchesMaterial && matchesType;
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
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
              images={product.images}
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
