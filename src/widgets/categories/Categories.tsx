import type { FC } from 'react';
import React from 'react';

import Container from '@/src/shared/ui/containers/Container';

import CategoryItem from './CategoryItem';

const Categories: FC = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CategoryItem
        style="left"
        src="/img/categories/shoes.webp"
        link="/catalog"
        filterType="Обувь"
        title="Обувь"
        className="transition-all duration-300 ease-in-out text-[44px] m-[25px] ml-[40px] md:m-[45px] md:ml-[60px] group-hover:text-[55px] 2xl:text-[59px] 2xl:leading-[52px] 2xl:group-hover:text-[79px]"
        classText="text-left md:text-left"
      />
      <CategoryItem
        style="right"
        src="/img/categories/accesories.webp"
        link="/catalog"
        filterType="Аксессуары"
        title="Аксессуары"
        className="transition-all duration-300 ease-in-out text-[44px] m-[25px] mr-[40px] md:m-[45px] md:mr-[60px] group-hover:text-[55px] 2xl:text-[59px] 2xl:leading-[52px] 2xl:group-hover:text-[79px]"
        classText="text-left md:text-right"
      />
    </Container>
  );
};

export default Categories;
