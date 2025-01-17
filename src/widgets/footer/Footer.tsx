import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import LinkTg from '@/src/shared/ui/link-tg/LinkTg';
import LinkWa from '@/src/shared/ui/link-wa/LinkWa';

const Footer: FC = () => {
  return (
    <footer className="px-5 pb-[40px] md:pb-[80px] xl:pb-[70px] 3xl:pb-[66px] pt-[74px] sm:pt-[120px] md:pt-[100px] 2xl:pt-[200px] grid md:grid-rows-custom-footer grid-rows-custom-footer-md md:grid-cols-4 md:gap-x-8 grid-cols-2 gap-x-12 mt-[150px] mx-auto">
      <p className="text-[44px] leading-[38px] md:text-[24px] md:leading-[21px] md:col-start-1 md:row-start-1 col-start-1 row-start-1 self-center 2xl:text-[38px] 2xl:leading-[34px]">
        LiRUMAR
      </p>
      <p className="sm:text-[22px] sm:leading-[22px]  md:text-[14px] md:leading-[12px] opacity-[80%] md:col-start-2 md:row-start-1 col-start-1 row-start-2 self-center 2xl:text-[25px] 2xl:leading-[22px]">
        Страницы
      </p>
      <p className="sm:text-[22px] sm:leading-[22px]  md:text-[14px] md:leading-[12px] opacity-[80%] md:col-start-3 md:row-start-1 col-start-2 row-start-2 self-center 2xl:text-[25px] 2xl:leading-[22px]">
        Контакты
      </p>
      <p className="text-[14px] leading-[12px] opacity-[30%] md:col-start-4 md:row-start-1 hidden md:block self-center 2xl:text-[19px] 2xl:leading-[16px]">
        Информация
      </p>

      <Link
        href={'/catalog'}
        className="opacity-[80%] sm:text-[22px] sm:leading-[22px] md:text-[16px] md:leading-[14px] md:col-start-2 md:row-start-3 col-start-1 row-start-3 self-center 2xl:text-[19px] 2xl:leading-[16px]"
      >
        Каталог
      </Link>

      <Link
        href={'tel:+79672177813'}
        className="opacity-[80%] sm:text-[22px] sm:leading-[22px] md:text-[16px] md:leading-[14px] md:col-start-3 md:row-start-3 col-start-2 row-start-3 self-center 2xl:text-[19px] 2xl:leading-[16px]"
      >
        +7 (967) 217-78-13
      </Link>
      <Link
        href={{ pathname: '/catalog', query: { category: 'Обувь' } }}
        className="opacity-[80%] sm:text-[22px] sm:leading-[22px] md:text-[16px] md:leading-[14px] md:col-start-2 md:row-start-4 col-start-1 row-start-4 self-center 2xl:text-[19px] 2xl:leading-[16px]"
      >
        Обувь
      </Link>
      <Link
        href={'/privacy'}
        className="text-wrap sm:text-[25px] sm:leading-[35px] md:text-[14px] md:leading-[12px] opacity-[30%] md:col-start-4 md:row-start-4 col-start-1 row-start-6 self-center 2xl:text-[19px] 2xl:leading-[16px]"
      >
        Политика конфиденциальности
      </Link>

      <Link
        href={{ pathname: '/catalog', query: { category: 'Аксессуары' } }}
        className="opacity-[80%] sm:text-[22px] sm:leading-[22px] md:text-[16px] md:leading-[14px] md:col-start-2 md:row-start-5 col-start-1 row-start-5 self-center 2xl:text-[19px] 2xl:leading-[16px]"
      >
        Аксессуары
      </Link>

      <div className="flex gap-[10px] md:col-start-3 md:row-start-5 col-start-2 row-start-5">
        <LinkTg />

        <LinkWa />
      </div>

      <p className="sm:text-[25px] sm:leading-[35px] md:text-[14px] md:leading-[12px] opacity-[30%] md:col-start-4 md:row-start-5 col-start-2 row-start-6 self-center 2xl:text-[19px] 2xl:leading-[16px]">
        Сайт разработан
      </p>
    </footer>
  );
};

export default Footer;
