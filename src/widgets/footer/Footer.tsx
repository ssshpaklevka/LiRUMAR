import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className="px-5 grid md:grid-rows-custom-footer grid-rows-custom-footer-md md:grid-cols-4 md:gap-x-8 grid-cols-2 gap-x-12 mt-[150px] max-w-[1200px] mx-auto">
      <p className="text-[44px] leading-[38px] md:text-[24px] md:leading-[21px] md:col-start-1 md:row-start-1 col-start-1 row-start-1 self-center">
        LiRUMAR
      </p>
      <p className="sm:text-[22px] sm:leading-[22px]  md:text-[14px] md:leading-[12px] opacity-[80%] md:col-start-2 md:row-start-1 col-start-1 row-start-2 self-center">
        Страницы
      </p>
      <p className="sm:text-[22px] sm:leading-[22px]  md:text-[14px] md:leading-[12px] opacity-[80%] md:col-start-3 md:row-start-1 col-start-2 row-start-2 self-center">
        Контакты
      </p>
      <p className="text-[14px] leading-[12px] opacity-[30%] md:col-start-4 md:row-start-1 hidden md:block self-center">
        Информация
      </p>

      <Link
        href={'/catalog'}
        className="opacity-[80%] sm:text-[22px] sm:leading-[22px] md:text-[16px] md:leading-[14px] md:col-start-2 md:row-start-3 col-start-1 row-start-3 self-center"
      >
        Каталог
      </Link>

      <Link
        href={'tel:+79999999999'}
        className="opacity-[80%] sm:text-[22px] sm:leading-[22px] md:text-[16px] md:leading-[14px] md:col-start-3 md:row-start-3 col-start-2 row-start-3 self-center"
      >
        +7 (967) 217-78-13
      </Link>
      <Link
        href={{ pathname: '/catalog', query: { category: 'Обувь' } }}
        className="opacity-[80%] sm:text-[22px] sm:leading-[22px] md:text-[16px] md:leading-[14px] md:col-start-2 md:row-start-4 col-start-1 row-start-4 self-center"
      >
        Обувь
      </Link>
      <Link
        href={'/privacy'}
        className="sm:text-[25px] sm:leading-[35px] md:text-[14px] md:leading-[12px] opacity-[30%] md:col-start-4 md:row-start-4 col-start-1 row-start-6 self-center"
      >
        Политика конфиденциальности
      </Link>

      <Link
        href={{ pathname: '/catalog', query: { category: 'Аксессуары' } }}
        className="opacity-[80%] sm:text-[22px] sm:leading-[22px] md:text-[16px] md:leading-[14px] md:col-start-2 md:row-start-5 col-start-1 row-start-5 self-center"
      >
        Аксессуары
      </Link>

      <div className="flex gap-[10px] md:col-start-3 md:row-start-5 col-start-2 row-start-5">
        <Link
          href={'https://t.me/dandy_lab'}
          className="w-[60px] h-[60px] md:w-[34px] md:h-[34px] flex justify-center items-center bg-white"
        >
          <Image src="/img/footer/tg.svg" alt="tg" width={20} height={20} />
        </Link>

        <Link
          href={'https://api.whatsapp.com/send?phone=79672177813'}
          className="w-[60px] h-[60px] md:w-[34px] md:h-[34px] flex justify-center items-center bg-white"
        >
          <Image src="/img/footer/wa.svg" alt="wa" width={20} height={20} />
        </Link>
      </div>

      <p className="sm:text-[25px] sm:leading-[35px] md:text-[14px] md:leading-[12px] opacity-[30%] md:col-start-4 md:row-start-5 col-start-2 row-start-6 self-center">
        Сайт разработан
      </p>
    </footer>
  );
};

export default Footer;
