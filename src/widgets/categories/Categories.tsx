import type { FC } from 'react';
import React from 'react';

import Container from '@/src/shared/ui/containers/Container';

import CategoryItem from './CategoryItem';

const Categories: FC = () => {
  // pc: className = 'grid grid-cols-2 gap-5';
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CategoryItem
        style="left"
        src="/img/categories/shoes.png"
        link="/catalog"
        filterType="Обувь"
        title="Обувь"
        className="text-[33px] m-[25px] ml-[40px] md:m-[45px] md:ml-[60px]"
        classText="text-left md:text-left"
      />
      <CategoryItem
        style="right"
        src="/img/categories/accesories.png"
        link="/catalog"
        filterType="Аксессуары"
        title="Аксессуары"
        className="text-[44px] m-[25px] mr-[40px] md:m-[35px] md:mr-[60px]"
        classText="text-left md:text-right"
      />
    </Container>
  );
};

export default Categories;
