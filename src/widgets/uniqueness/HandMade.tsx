import Image from 'next/image';
import type { FC } from 'react';

import { cn } from '@/src/shared/lib/utils';

const HandMade: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[371px] md:h-[680px] xl:h-[540px] 2xl:h-[550px] 3xl:h-[835px]">
        <Image
          className="object-cover w-full h-[371px] md:h-[680px] xl:h-[540px] 2xl:h-[550px] 3xl:h-[835px]"
          src={'/img/uniqueness/uniqueness2.webp'}
          alt="uniqueness"
          width={2000}
          height={2000}
        />
      </div>
      <div className="w-full relative">
        <p className=" mt-[41px] text-[33px] leading-[29px] md:mt-[60px] md:text-[59px] md:leading-[53px] xl:mt-[56px] xl:text-[44px] xl:leading-[39px] 3xl:mt-[80px] 3xl:text-[70px] 3xl:leading-[63px] tracking-[0.5px]">
          Ручная работа, экзотическая <br />
          <span
            className={cn(
              'subfont text-[33px] leading-[29px] md:text-[59px] md:leading-[53px] xl:text-[44px] xl:leading-[39px] 3xl:text-[80px] 3xl:leading-[72px] tracking-[0.5px]',
            )}
          >
            премиальная кожа
          </span>
        </p>

        <div className="absolute right-0 bottom-0">
          <div className="relative">
            <Image
              src={'/img/uniqueness/pointerline.png'}
              alt="arrow"
              width={641}
              height={400}
              className="xl:w-[33.385vw] xl:h-auto lg:w-[27.344vw] lg:h-[400px] md:w-[27.344vw] md:h-[440px] sm:w-[30.344vw] sm:h-[230px] w-[30.344vw] h-[250px]"
            />
            <Image
              src={'/img/uniqueness/pointer.svg'}
              alt="arrow"
              width={64}
              height={64}
              className="absolute 3xl:top-0 3xl:-left-3 2xl:-left-3 2xl:-top-1 xl:-left-[20px] xl:-top-3  lg:-left-[30px] lg:-top-1 md:-left-[30px] md:-top-1 sm:-left-[10px] sm:-top-0 md:size-[64px] top-[0px] -left-[10px] size-[32px]"
            />
          </div>
          <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] xl:text-[19px] xl:leading-[29px] text-end underline underline-offset-8">
            Кожа питона
          </p>
        </div>
      </div>
    </div>
  );
};

export default HandMade;
