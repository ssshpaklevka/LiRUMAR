import type { FC } from 'react';
import React from 'react';

import Container from '@/src/shared/ui/containers/Container';

import CategoryItem from './CategoryItem';

const Categories: FC = () => {
  return (
    <Container className="grid grid-cols-2 gap-5 ">
      <CategoryItem
        style="left"
        src="/img/categories/shoes.png"
        link="/catalog"
        filterType="Обувь"
        title="Обувь"
        className="text-[33px] m-[46px] ml-[60px]"
      />
      <CategoryItem
        style="right"
        src="/img/categories/accesories.png"
        link="/catalog"
        filterType="Аксессуары"
        title="Аксессуары"
        className="text-[44px] mr-[45px]"
      />
    </Container>
  );
};

export default Categories;
