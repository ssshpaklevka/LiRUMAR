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
}

const CategoryItem: FC<Props> = ({
  src,
  title,
  link,
  filterType,
  style,
  className,
}) => {
  return (
    <Link
      href={{
        pathname: link,
        query: { category: filterType },
      }}
      className={cn(
        style == 'left' ? 'text-left' : 'text-right',
        'h-[716px] flex items-end bg-cover',
      )}
      style={{ backgroundImage: `url('${src}')` }}
    >
      <p className={cn('subfont w-full m-[42px] leading-[39px]', className)}>
        {title}
      </p>
    </Link>
  );
};

export default CategoryItem;
