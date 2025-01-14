import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { cn } from '@/src/shared/lib/utils';
import ShoePointer from '@/src/shared/ui/assets/shoe-pointer/ShoePointer';
import ShoePointerMob from '@/src/shared/ui/assets/shoe-pointer/ShoePointerMob';
import ShoePointerPc from '@/src/shared/ui/assets/shoe-pointer/ShoePointerPc';

const HandMade: FC = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-[371px] sm:h-[400px] md:h-[520px] lg:h-[522px] xl:h-[522px] 2xl:h-[600px]">
        <Image
          className="object-cover"
          src={'/img/uniqueness/uniqueness.png'}
          alt="uniqueness"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 1160px"
        />
      </div>

      <p className="mt-[37px] sm:mt-[90px] md:mt-[250px] xl:mt-[250px] text-[33px] leading-[29px] sm:text-[59px] sm:leading-[53px]  md:text-[44px] md:leading-[40px] 2xl:text-[70px] 2xl:leading-[63px] tracking-[0.5px]">
        Ручная работа, экзотическая <br />
        <span
          className={cn(
            'subfont text-[33px] leading-[29px] sm:text-[59px] sm:leading-[53px] md:text-[50px] md:leading-[45px] 2xl:text-[80px] 2xl:leading-[72px] tracking-[0.5px]',
          )}
        >
          премиальная кожа
        </span>
      </p>

      <div className="hidden xl:block absolute right-0 transform top-[370px]">
        <ShoePointerPc />
        <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] 2xl:text-[25px] 2xl:leading-[30px]  text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>
      <div className="hidden md:block xl:hidden  absolute -right-8 transform top-[360px]">
        <ShoePointer />
        <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>
      <div className="block md:hidden absolute right-9 transform top-[260px]">
        <ShoePointerMob />
        <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>
    </div>
  );
};

export default HandMade;
