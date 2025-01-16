import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

const YourStatus: FC = () => {
  return (
    <div className="flex flex-col relative">
      <div className="h-[550px] flex items-center flex-row pt-[96px] gap-24">
        <p className="text-[33px] leading-[36px] w-[360px] md:text-[60px] md:leading-[66px] md:w-[660px] xl:text-[45px] xl:leading-[50px] xl:w-[600px] 3xl:text-[79px] 3xl:leading-[87px] 3xl:w-[1060px] absolute z-10">
          <span className="subfont text-[38px] leading-[42px] md:text-[69px] md:leading-[76px] xl:text-[50px] xl:leading-[55px] 3xl:text-[96px] 3xl:leading-[105px] ">
            -уникальность,{' '}
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
