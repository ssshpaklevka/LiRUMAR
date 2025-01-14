import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

const YourStatus: FC = () => {
  return (
    <div className="flex flex-col relative">
      <div className="h-[550px] flex items-center flex-row pt-[96px] gap-24">
        <p className="text-[33px] leading-[36px] sm:text-[60px] sm:leading-[66px] md:text-[44px] md:leading-[48px] 2xl:text-[79px] 2xl:leading-[87px]  absolute z-10">
          <span className="subfont text-[38px] leading-[42px] sm:text-[70px] sm:leading-[76px] md:text-[48px] md:leading-[52px] 2xl:text-[96px] 2xl:leading-[105px] ">
            -уникальность, <br />
          </span>
          которая подчеркивает ваш статус
        </p>

        <Image
          src={'/img/uniqueness/shoes.png'}
          width={365}
          height={417}
          className="absolute right-0 top-0 z-0 2xl:h-[667px] 2xl:w-[584px]"
          alt="shoes"
        />
      </div>
      <div className="2xl:pl-[200px]">
        <Image
          src={'/img/uniqueness/sneakers.webp'}
          width={311}
          height={357}
          alt="sneakers"
          className="2xl:h-[571px] 2xl:w-[497px]"
        />
      </div>
    </div>
  );
};

export default YourStatus;
