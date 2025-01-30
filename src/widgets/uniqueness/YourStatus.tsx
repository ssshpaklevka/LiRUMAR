import type { FC } from 'react';
import React from 'react';

const YourStatus: FC = () => {
  return (
    <div className="flex flex-col relative">
      <div className="h-[350px] sm:h-[450px] flex items-end xl:items-center flex-row xl:pt-[96px] gap-24">
        <p className="mt-[160px] md:mt-0 text-[33px] leading-[36px] md:text-[60px] md:leading-[66px] xl:text-[45px] xl:leading-[50px] xl:max-w-[600px] 3xl:text-[79px] 3xl:leading-[87px] 3xl:max-w-[1060px] absolute z-10">
          <span className="subfont text-[38px] leading-[42px] md:text-[69px] md:leading-[76px] xl:text-[50px] xl:leading-[55px] 3xl:text-[96px] 3xl:leading-[105px]">
            — уникальность,{' '}
          </span>
          которая подчеркивает ваш статус
        </p>

        <div
          className="filter brightness-50 grayscale absolute right-0 3xl:mr-[250px] top-0 3xl:top-6 z-0 w-[267px] h-[305px] sm:w-[390px] sm:h-[420px] xl:w-[490px] xl:h-[580px] 3xl:w-[584px] 3xl:h-[667px]"
          style={{
            backgroundImage: 'url("/img/uniqueness/shoes1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div className="pt-16 xl:pt-0 xl:pl-[170px] 3xl:pt-[80px]">
        <div
          className="filter brightness-50 grayscale w-[240px] h-[287px] sm:w-[290px] sm:h-[320px] xl:w-[313px] xl:h-[360px] 3xl:w-[497px] 3xl:h-[571px]"
          style={{
            backgroundImage: 'url("/img/uniqueness/sneakers1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  );
};

export default YourStatus;
