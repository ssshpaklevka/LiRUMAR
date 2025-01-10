import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { cn } from '@/src/shared/lib/utils';

interface Props {
  src: string;
  title: string;
  link: string;
  style: 'left' | 'right';
}

const CategoryItem: FC<Props> = ({ src, title, link, style }) => {
  return (
    <Link
      href={link}
      className={cn(
        style == 'left' ? 'text-left' : 'text-right',
        'h-[716px] flex items-end bg-cover',
      )}
      style={{ backgroundImage: `url('${src}')` }}
    >
      <p className={cn('subfont w-full m-[54px] text-[33px] leading-[38px]')}>
        {title}
      </p>
    </Link>
  );
};

export default CategoryItem;
