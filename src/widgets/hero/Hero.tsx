import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import CreateRequest from '@/src/features/create-request/CreateRequest.';
import { cn } from '@/src/shared/lib/utils';

const Hero: FC = () => {
  return (
    <div
      className="flex justify-center items-center bg-cover -mt-[60px] pb-[120px] sm:pb-[140px] md:pb-[240px] z-[-10] relative"
      style={{ backgroundImage: 'url("/img/hero/frame.webp")' }}
    >
      {/* Пк версия */}
      <div className="hidden lg:block">
        <div className=" px-5 w-full flex flex-col items-center h-full gap-[63px] relative mt-[240px]">
          <div className="flex justify-center flex-col lg:flex-row lg:gap-0 gap-[73px] items-center relative h-full 2xl:w-full">
            <div className="z-20  md:max-w-[260px] w-full lg:relative flex h-full">
              <p className="w-[220px] text-left text-[14px] leading-[16px] sm:text-[25px] sm:leading-[30px] md:text-[16px] md:leading-[19px] 3xl:text-[25px] 3xl:leading-[30px]  ">
                Ручная работа из экзотической кожи для тех, кто ценит статус и
                индивидуальность.
              </p>
              <h1
                className={cn(
                  'left-0 top-0 lg:top-[calc(50%-170px)]  2xl:top-[calc(50%-200px)] -translate-y-1/2 z-[999] text-nowrap',
                  'absolute font-normal tracking-[-3.5px] text-[33px] leading-[33px] sm:text-[59px] sm:leading-[59px] md:text-[61px] md:leading-[61px] 3xl:text-[105px] 3xl:leading-[105px] 2xl:font-normal',
                )}
              >
                <span
                  className={cn(
                    'subfont text-[33px] leading-[33px] sm:text-[59px] sm:leading-[59px] md:text-[61px] md:leading-[61px] tracking-[-3px] 3xl:text-[105px] 3xl:leading-[105px]',
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
                src="/img/hero/hero.webp"
                alt="hero"
                width={2000}
                height={3000}
                className="h-full w-auto md:block hidden 2xl:h-[759px] 2xl:w-[640px] 3xl:h-[1214px] 3xl:w-[1024px]"
                style={{ marginTop: '-160px' }}
              />
            </div>
            <CreateRequest
              variant="big"
              className="flex-none h-[50px] w-[302px] sm:h-[92px] sm:w-[553px] md:h-[88px] md:w-[260px]  2xl:h-[140px]  2xl:text-[19px] 2xl:leading-[16px]"
            />
          </div>
        </div>
      </div>

      {/* Мобильная версия */}
      <div className="block lg:hidden">
        <div className="px-5 w-full flex flex-col items-center h-full gap-[63px] relative mt-[240px]">
          <div className="flex justify-center flex-col lg:flex-row items-center relative h-full 2xl:w-full">
            {/* Левый блок с текстами */}
            <div className="z-20 2xl:max-w-[416px] md:max-w-[260px] w-full lg:relative flex">
              <h1
                className={cn(
                  'top-0 left-0 lg:top-[calc(50%-170px)] 2xl:top-[calc(50%-200px)] -translate-y-1/2  -translate-x-1/1 z-[999] text-nowrap',
                  'absolute font-normal tracking-[-1px] text-[33px] leading-[33px]  sm:text-[44px] sm:leading-[44px]  md:text-[61px] md:leading-[61px] 2xl:text-[105px] 2xl:leading-[105px] 2xl:font-normal',
                )}
              >
                <span
                  className={cn(
                    'subfont text-[33px] leading-[33px] sm:text-[44px] sm:leading-[44px]  md:text-[61px] md:leading-[61px] tracking-[-0.5px] 2xl:text-[105px] 2xl:leading-[105px]',
                  )}
                >
                  LiRUMAR{' '}
                </span>
                — Искусство
                <br />
                быть неповторимым
              </h1>
            </div>

            <div className="flex flex-col items-center w-auto gap-[40px] sm:gap-[73px] ">
              {/* Блок с картинкой */}
              <div className="max-h-[calc(100vh-11.111vh)] relative w-auto">
                <Image
                  src="/img/hero/hero.webp"
                  alt="hero"
                  width={2000}
                  height={3000}
                  className=" w-auto md:w-[661px] md:h-[784px]"
                  style={{ marginTop: '-160px' }}
                />
                {/* Текст под картинкой */}
                <p className="absolute bottom-5 right-5 text-right w-[314px] sm:w-[390px] text-[14px] leading-[16px] sm:text-[16px] sm:leading-[19px] 2xl:text-[25px] 2xl:leading-[30px]">
                  Ручная работа из экзотической кожи для тех, кто ценит статус и
                  индивидуальность.
                </p>
              </div>

              {/* Кнопка, растягивающаяся по ширине изображения */}
              <CreateRequest
                variant="big"
                className="flex-none h-[50px]  md:h-[88px] w-full z-50"
              />
            </div>
          </div>
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
