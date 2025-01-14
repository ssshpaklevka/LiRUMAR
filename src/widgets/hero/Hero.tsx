import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import CreateRequest from '@/src/features/create-request/CreateRequest.';
import { cn } from '@/src/shared/lib/utils';

const Hero: FC = () => {
  return (
    <div
      className="flex justify-center items-center bg-cover -mt-[60px] pb-[240px] z-[-10]border-b-4 relative"
      style={{ backgroundImage: 'url("/img/hero/frame.png")' }}
    >
      <div className="px-5 w-full flex flex-col  items-center h-full gap-[63px] relative mt-[240px]">
        <div className="flex justify-center flex-col xl:flex-row xl:gap-0 gap-[70px] items-center relative h-full 2xl:w-full">
          <div className="2xl:max-w-[416px] md:max-w-[260px] w-full relative">
            <p className="w-[220px] text-left text-[14px] leading-[16px] sm:text-[25px] sm:leading-[30px] md:text-[16px] md:leading-[19px] 2xl:text-[25px] 2xl:leading-[30px]  ">
              Ручная работа из экзотической кожи для тех, кто ценит статус и
              индивидуальность.
            </p>
            <h1
              className={cn(
                'left-0 lg:top-auto top-[calc(50%-120px)] xl:top-[calc(50%-120px)] 2xl:top-[calc(50%-200px)] -translate-y-24 z-[999] text-nowrap',
                'absolute font-normal tracking-[-3.5px] text-[33px] leading-[33px] sm:text-[59px] sm:leading-[59px] md:text-[61px] md:leading-[61px] 2xl:text-[105px] 2xl:leading-[105px] 2xl:font-normal',
              )}
            >
              <span
                className={cn(
                  'subfont text-[33px] leading-[33px] sm:text-[59px] sm:leading-[59px] md:text-[61px] md:leading-[61px] tracking-[-3px] 2xl:text-[105px] 2xl:leading-[105px]',
                )}
              >
                LiRUMAR{' '}
              </span>
              — Искусство
              <br />
              быть неповторимым
            </h1>
          </div>
          <div className="max-h-[calc(100vh-11.111vh)] relative">
            <Image
              src="/img/hero/hero.png"
              alt="hero"
              // layout="responsive"
              width={2000}
              height={3000}
              className="h-full w-auto md:block hidden"
              style={{ marginTop: '-160px' }} // Поднимаем изображение
            />
          </div>
          <CreateRequest
            variant="big"
            className="flex-none h-[50px] w-[302px] sm:h-[92px] sm:w-[553px] md:h-[88px] md:w-[260px]  2xl:h-[140px] 2xl:w-[416px] 2xl:text-[19px] 2xl:leading-[16px]"
          />
        </div>
      </div>
      <div className="max-w-screen overflow-x-hidden h-[450px] flex justify-center items-center absolute -bottom-[0px] z-[0] transform translate-y-1/2">
        <div
          className="w-[100vw] h-[300px] bg-background blur-[50px]  "
          style={{ transform: '', borderRadius: '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
