import type { FC } from 'react';
import React from 'react';

import Container from '@/src/shared/ui/containers/Container';

import CategoryItem from './CategoryItem';

const Categories: FC = () => {
  return (
    <Container className="grid grid-cols-2 gap-5">
      <CategoryItem
        style="left"
        src="/img/categories/shoes.png"
        link="#"
        title="Обувь"
      />
      <CategoryItem
        style="right"
        src="/img/categories/accesories.png"
        link="#"
        title="Аксессуары"
      />
    </Container>
  );
};

export default Categories;
