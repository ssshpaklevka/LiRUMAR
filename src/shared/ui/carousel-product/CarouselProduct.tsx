'use client';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import type { Product } from '@/src/entities/product/product.interface';

import type { CarouselApi } from '../carousel';
import { Carousel, CarouselContent, CarouselItem } from '../carousel';
import ProductCard from '../product-card/ProductCard';
import supabase from '../../api/SupaBase';

// Функция для получения случайных товаров
const getRandomProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*') // Получаем товары в случайном порядке
    .limit(10); // Ограничим количество до 10 для удобства

  if (error || !data) {
    return [];
  }

  return data as Product[];
};

const CarouselProduct: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Чтобы показать лоадер, пока данные загружаются
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = React.useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  const scrollNext = React.useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const randomProducts = await getRandomProducts(); // Запрашиваем случайные товары
      setProducts(randomProducts); // Сохраняем их в состояние
      setLoading(false);
    };

    fetchProducts();
  }, []); // Запрос выполняется один раз при монтировании компонента

  if (loading) {
    return <div>Загрузка...</div>; // Лоадер, пока данные загружаются
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'center',
      }}
      className="px-5 w-full gap-[35px] 2xl:gap-[53px] flex flex-col"
    >
      <div className="w-full flex justify-between flex-row items-center">
        <p className="text-[25px] leading-[30px] sm:text-[44px] sm:leading-[52px] md:text-[25px] md:leading-[30px] 2xl:text-[44px] 2xl:leading-[52px]">
          Смотрите так же
        </p>
        <div className="flex items-center">
          <button onClick={scrollPrev}>
            <ChevronLeft size={40} strokeWidth={0.5} />
          </button>
          <button onClick={scrollNext}>
            <ChevronRight size={40} strokeWidth={0.5} />
          </button>
        </div>
      </div>

      <CarouselContent className="flex gap-4 xl:gap-1">
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <div className="w-[275px] 2xl:w-[440px]">
              <ProductCard
                id={product.id}
                url={product.url}
                name={product.name}
                price={product.price}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselProduct;
