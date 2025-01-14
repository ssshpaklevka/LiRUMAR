import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { cn } from '@/src/shared/lib/utils';
import ShoePointer from '@/src/shared/ui/assets/shoe-pointer/ShoePointer';
import ShoePointerMob from '@/src/shared/ui/assets/shoe-pointer/ShoePointerMob';

const HandMade: FC = () => {
  return (
    <div className="relative">
      <div className="h-[371px] w-full">
        <Image
          className="h-[371px] object-cover sm:h-[400px] sm:object-none md:h-[520px] md:object-none lg:h-[522px] lg:object-none xl:h-[522px] xl:object-none"
          src={'/img/uniqueness/uniqueness.png'}
          alt="uniqueness"
          width={1160}
          height={522}
        />
      </div>

      <p className="mt-[37px] sm:mt-[90px] md:mt-[250px] xl:mt-[250px] text-[33px] leading-[29px] sm:text-[59px] sm:leading-[53px]  md:text-[44px] md:leading-[40px]  tracking-[0.5px]">
        Ручная работа, экзотическая <br />
        <span
          className={cn(
            'subfont text-[33px] leading-[29px] sm:text-[59px] sm:leading-[53px] md:text-[50px] md:leading-[45px]  tracking-[0.5px]',
          )}
        >
          премиальная кожа
        </span>
      </p>

      <div className="hidden md:block absolute right-0 transform top-[366px]">
        <ShoePointer />
        <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>
      <div className="block md:hidden absolute right-3 transform top-[250px]">
        <ShoePointerMob />
        <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>
    </div>
  );
};

export default HandMade;
