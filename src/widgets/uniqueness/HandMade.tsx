import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { cn } from '@/src/shared/lib/utils';
import ShoePointer from '@/src/shared/ui/assets/shoe-pointer/ShoePointer';

const HandMade: FC = () => {
  return (
    <div className="relative">
      <Image
        src={'/img/uniqueness/uniqueness.png'}
        alt="uniqueness"
        width={1160}
        height={522}
      />

      <p className="mt-[55px] text-[44px] leading-[40px] tracking-[-2%]">
        Ручная работа, экзотическая <br />
        <span className={cn('subfont text-[50px] leading-[45px]')}>
          премиальная кожа
        </span>
      </p>
      <div className="absolute right-0 transform top-[366px]">
        <ShoePointer />
        <p className="text-end underline underline-offset-8 leading-[19.2px]">
          Кожа питона
        </p>
      </div>
    </div>
  );
};

export default HandMade;
