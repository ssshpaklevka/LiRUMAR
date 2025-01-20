import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

const LinkTg: FC = () => {
  return (
    <Link
      href={'https://t.me/dandy_lab'}
      className="w-[34px] h-[34px] 3xl:w-[54px] 3xl:h-[54px] flex justify-center items-center bg-white"
    >
      <Image
        src="/img/footer/tg.svg"
        alt="tg"
        width={20}
        height={20}
        className="w-[20px] h-[20px] transition-all duration-300 ease-in-out hover:w-[30px] hover:h-[30px] 3xl:w-[30px] 3xl:h-[30px] hover:3xl:w-[40px] hover:3xl:h-[40px]"
      />
    </Link>
  );
};

export default LinkTg;
