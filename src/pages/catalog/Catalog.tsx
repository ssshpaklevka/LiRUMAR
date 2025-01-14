'use client';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Container from '@/src/shared/ui/containers/Container';
import Combobox from '@/src/shared/ui/combobox/Combobox';
import ProductList from '@/src/entities/product/ProductList';

const Catalog: FC = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get('category');

  // Используем состояние для хранения выбранных фильтров
  const [filters, setFilters] = useState({
    type: [] as string[], // Ожидаем массив строк
    material: [] as string[],
    color: [] as string[],
  });
  useEffect(() => {
    if (typeof category === 'string') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        type: [category], // Устанавливаем категорию как фильтр по типу (массив строк)
      }));
    }
  }, [category]);

  const handleFilterChange = (
    filterType: 'type' | 'material' | 'color',
    selectedValues: string[],
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: selectedValues,
    }));
  };

  return (
    <Container className="mx-auto mt-[95px]">
      <div className="flex flex-col justify-between lg:flex-row">
        <h1 className="text-[44px] leading-[44px] sm:text-[59px] sm:leading-[59px] md:text-[74px] md:leading-[74px] font-normal">
          Каталог
        </h1>
        <div className="flex items-center justify-between ">
          <Combobox
            title="Ассортимент"
            filterType="type"
            onChange={(values) => handleFilterChange('type', values)}
          />
          <Combobox
            title="Материал"
            filterType="material"
            onChange={(values) => handleFilterChange('material', values)}
          />
          <Combobox
            title="Цвет"
            filterType="color"
            onChange={(values) => handleFilterChange('color', values)}
          />
        </div>
      </div>
      <ProductList filters={filters} />
    </Container>
  );
};

export default Catalog;
