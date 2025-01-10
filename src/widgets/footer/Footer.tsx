import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import Tg from '@/src/shared/ui/assets/tg/Tg';
import WhatsApp from '@/src/shared/ui/assets/wa/WhatsApp';
import { Button } from '@/src/shared/ui/button';

const Footer: FC = () => {
  return (
    <footer
      className="grid grid-cols-4 gap-x-8 mt-[150px] max-w-[1200px] mx-auto"
      style={{
        gridTemplateRows: 'auto 91px repeat(3, 50px)',
      }}
    >
      <p className="text-[24px] col-start-1 row-start-1 self-center">LiRUMAR</p>
      <p className="text-[14px] opacity-[80%] col-start-2 row-start-1 self-center">
        Страницы
      </p>
      <p className="text-[14px] opacity-[80%] col-start-3 row-start-1 self-center">
        Контакты
      </p>
      <p className="text-[14px] opacity-[30%] col-start-4 row-start-1 self-center">
        Информация
      </p>

      <p className="opacity-[80%] col-start-2 row-start-3 self-center">
        Каталог
      </p>

      <Link
        href={'tel:+79999999999'}
        className="opacity-[80%] col-start-3 row-start-3 self-center"
      >
        +7 (999) 999-99-99
      </Link>
      <p className="opacity-[80%] col-start-2 row-start-4 self-center">Обувь</p>
      <Link
        href={'/privacy'}
        className="text-[14px] opacity-[30%] col-start-4 row-start-4 self-center"
      >
        Политика конфиденциальности
      </Link>

      <p className="opacity-[80%] col-start-2 row-start-5 self-center">
        Аксессуары
      </p>

      <div className="flex gap-[10px] col-start-3 row-start-5 self-center">
        <Button size="icon">
          <Tg />
        </Button>
        <Button size="icon">
          <WhatsApp />
        </Button>
      </div>

      <p className="text-[14px] opacity-[30%] col-start-4 row-start-5 self-center">
        Сайт разработан
      </p>
    </footer>
  );
};

export default Footer;
