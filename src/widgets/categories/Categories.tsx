import type { FC } from 'react';
import React from 'react';

import Container from '@/src/shared/ui/containers/Container';

import CategoryItem from './CategoryItem';

const Categories: FC = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CategoryItem
        style="left"
        src="/img/categories/shoes1.png"
        link="/catalog"
        filterType="Обувь"
        title="Обувь"
        className="origin-bottom-left group-hover:scale-110 transition-all duration-300 ease-in-out text-[44px] leading-[29px] md:text-[59px] md:leading-[52px] xl:text-[45px] xl:leading-[40px] 3xl:text-[59px] 3xl:leading-[52px] m-[25px] ml-[40px] md:m-[45px] md:ml-[60px] "
        classText="text-left md:text-left"
      />
      <CategoryItem
        style="right"
        src="/img/categories/accesories.webp"
        link="/catalog"
        filterType="Аксессуары"
        title="Аксессуары"
        className="origin-bottom-right group-hover:scale-110 transition-all duration-300 ease-in-out text-[44px] leading-[29px] md:text-[59px] md:leading-[52px] xl:text-[45px] xl:leading-[40px] 3xl:text-[59px] 3xl:leading-[52px] m-[25px] mr-[40px] md:m-[45px] md:mr-[60px] "
        classText="text-left md:text-right"
      />
    </Container>
  );
};

export default Categories;
