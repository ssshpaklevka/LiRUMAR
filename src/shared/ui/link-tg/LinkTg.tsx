import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

const LinkTg: FC = () => {
  return (
    <Link
      href={'https://t.me/dandy_lab'}
      className="w-[34px] h-[34px] sm:w-[60px] sm:h-[60px] md:w-[34px] md:h-[34px] flex justify-center items-center bg-white"
    >
      <Image src="/img/footer/tg.svg" alt="tg" width={20} height={20} />
    </Link>
  );
};

export default LinkTg;
