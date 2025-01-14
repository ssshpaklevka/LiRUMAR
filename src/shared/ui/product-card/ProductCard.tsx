import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';

import CardPlaceholder from '../assets/card-placeholder/CardPlaceholder';

interface Props {
  id: string;
  url?: string;
  name: string;
  price: number;
}

const ProductCard: FC<Props> = ({ id, url, name, price }) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };
  return (
    <Link className="flex flex-col gap-[20px] " href={`/catalog/${id}`}>
      <div className="relative w-full h-[277px] 2xl:size-[440px] bg-[#2C2C2C] flex justify-center items-center">
        {url ? (
          <Image src={url} layout="fill" objectFit="cover" alt={name} />
        ) : (
          <CardPlaceholder />
        )}
      </div>
      <div className="flex flex-col gap-[14px] md:gap-[10px] 2xl:gap-[32px]">
        <p className="text-[14px] leading-[16px] sm:text-[22px] sm:leading-[25px] md:text-[16px] md:leading-[19.2px] 2xl:text-[25px] 2xl:leading-[30px]">
          {name}
        </p>
        <p className="text-[14px] leading-[16px] sm:text-[22px] sm:leading-[25px] md:text-[16px] md:leading-[19.2px] 2xl:text-[25px] 2xl:leading-[30px]">
          {formatPrice(price)} ₽
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
