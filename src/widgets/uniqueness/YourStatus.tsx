import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

const YourStatus: FC = () => {
  return (
    <div className="flex flex-col relative">
      <div className="h-[450px] flex items-center flex-row md:pt-[96px] gap-24">
        <p className="text-[33px] leading-[36px] max-w-[380px] md:text-[60px] md:leading-[66px] md:max-w-[660px] xl:text-[45px] xl:leading-[50px] xl:max-w-[600px] 3xl:text-[79px] 3xl:leading-[87px] 3xl:max-w-[1060px] absolute z-10">
          <span className="subfont text-[38px] leading-[42px] md:text-[69px] md:leading-[76px] xl:text-[50px] xl:leading-[55px] 3xl:text-[96px] 3xl:leading-[105px]">
            — уникальность,{' '}
          </span>
          которая подчеркивает ваш статус
        </p>

        <Image
          src={'/img/uniqueness/shoes.webp'}
          width={365}
          height={417}
          className="filter brightness-50 grayscale absolute right-0 3xl:mr-[250px] top-0 3xl:top-6 z-0 w-[267px] h-[305px] sm:w-[390px] sm:h-[420px] xl:w-[490px] xl:h-[580px] 3xl:w-[584px] 3xl:h-[667px]"
          alt="shoes"
        />
      </div>
      <div className="xl:pl-[170px] 3xl:pt-[80px]">
        <Image
          src={'/img/uniqueness/sneakers.webp'}
          width={311}
          height={357}
          alt="sneakers"
          className="filter brightness-50 grayscale w-[171px] h-[197px] sm:w-[290px] sm:h-[320px] xl:w-[313px] xl:h-[360px] 3xl:w-[497px] 3xl:h-[571px]"
        />
      </div>
    </div>
  );
};

export default YourStatus;
