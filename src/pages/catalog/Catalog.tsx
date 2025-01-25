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

  const [filters, setFilters] = useState({
    type: category ? [category] : [],
    material: [] as string[],
    color: [] as string[],
  });
  useEffect(() => {
    if (typeof category === 'string') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        type: [category],
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
    <Container className="mx-auto mt-[95px] px-5">
      <div className="flex flex-col justify-between lg:flex-row">
        <h1 className="text-[44px] leading-[44px] sm:text-[59px] sm:leading-[59px] md:text-[74px] md:leading-[74px] 2xl:text-[105px] 2xl:leading-[105px] font-normal">
          Каталог
        </h1>
        <div className="flex items-center justify-between ">
          <Combobox
            title="Ассортимент"
            filterType="type"
            onChange={(values) => handleFilterChange('type', values)}
            selectedFilters={filters.type}
          />
          <Combobox
            title="Материал"
            filterType="material"
            onChange={(values) => handleFilterChange('material', values)}
            className="ml-8"
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
