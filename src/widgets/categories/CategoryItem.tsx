import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { cn } from '@/src/shared/lib/utils';

interface Props {
  src: string;
  title: string;
  link: string;
  filterType: string;
  style: 'left' | 'right';
  className: string;
  classText: string;
}

const CategoryItem: FC<Props> = ({
  src,
  title,
  link,
  filterType,
  className,
  classText,
}) => {
  return (
    <Link
      href={{
        pathname: link,
        query: { category: filterType },
      }}
      className={cn(
        'grayscale hover:filter-none transition-all duration-300 ease-in-out group aspect-square md:h-[716px] 3xl:h-[1145px] md:aspect-auto flex items-end text-left bg-cover bg-bottom md:bg-cover',
      )}
      style={{ backgroundImage: `url('${src}')` }}
    >
      <p className={cn('subfont w-full  leading-[39px]', className, classText)}>
        {title}
      </p>
    </Link>
  );
};

export default CategoryItem;
