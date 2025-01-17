import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

const LinkWa: FC = () => {
  return (
    <Link
      href={'https://api.whatsapp.com/send?phone=79672177813'}
      className="w-[34px] h-[34px] 2xl:w-[60px] 2xl:h-[60px] flex justify-center items-center bg-white"
    >
      <Image src="/img/footer/wa.svg" alt="wa" width={20} height={20} />
    </Link>
  );
};

export default LinkWa;
