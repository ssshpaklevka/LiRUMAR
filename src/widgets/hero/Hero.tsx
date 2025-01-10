import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import CreateRequest from '@/src/features/create-request/CreateRequest.';
import { cn } from '@/src/shared/lib/utils';

const Hero: FC = () => {
  return (
    <div
      className="flex justify-center w-full"
      // style={{ backgroundImage: `url('/img/hero/frame.png')` }}
    >
      <div className="max-w-[1200px] px-5 w-full h-[876px] flex justify-center flex-col gap-[63px] relative">
        <h1 className={cn('text-[61px] leading-[61px] tracking-[-4%]')}>
          <span className={cn('subfont ')}>LiRUMAR </span>
          — Искусство
          <br />
          быть неповторимым
        </h1>
        <Image
          src={'/img/hero/hero.png'}
          alt="hero"
          width={640}
          height={760}
          className="absolute w-auto z-[-1] left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        />
        <div className="flex justify-between">
          <p className="max-w-[193px]">
            Ручная работа из экзотической кожи для тех, кто ценит статус и
            индивидуальность.
          </p>
          <CreateRequest variant="big" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
