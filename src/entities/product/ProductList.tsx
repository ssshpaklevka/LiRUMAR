'use client';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

import supabase from '@/src/shared/api/SupaBase';
import ProductCard from '@/src/shared/ui/product-card/ProductCard';

interface Filters {
  type: string[];
  material: string[];
  color: string[];
}

// Интерфейс для продукта
interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string;
  price: number;
  color: string;
  material: string;
  type: string; // Ассортимент
  url: string; // Ссылка на изображение продукта
}

// Пропсы для компонента ProductList
interface ProductListProps {
  filters: Filters;
}

const getProductList = async (filters: Filters): Promise<Product[]> => {
  let query = supabase.from('products').select('*');

  // Применяем фильтрацию на основе выбранных значений
  if (filters.color.length > 0) {
    query = query.in('color', filters.color);
  }
  if (filters.material.length > 0) {
    query = query.in('material', filters.material);
  }
  if (filters.type.length > 0) {
    query = query.in('type', filters.type); // Предположим, что "type" соответствует ассортименту
  }

  const { data, error } = await query;

  if (error) {
    return [];
  }

  return data as Product[]; // Явно указываем, что возвращаемые данные соответствуют массиву Product
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
  }, [filters]); // Перезапуск запроса при изменении фильтров

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoaderCircle className="w-10 h-10 text-gray-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="mt-[45px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[21px] gap-y-[40px]">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            url={product.url}
            name={product.name}
            price={product.price}
          />
        ))
      ) : (
        <div className="absolute top-1/2 left-1/2">Нет доступных товаров.</div>
      )}
    </div>
  );
};

export default ProductList;
