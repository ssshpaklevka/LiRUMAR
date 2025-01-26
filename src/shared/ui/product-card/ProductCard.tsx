'use client';

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

const ProductCard: FC<Props> = ({ id, name, price }) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  return (
    <Link
      className="hover:scale-95 transition-all duration-300 flex flex-col gap-[10px] md:gap-[15px] xl:gap-[20px] h-full"
      href={`/catalog/${id}`}
    >
      <div className="overflow-hidden relative w-full aspect-square bg-[#2C2C2C] flex justify-center items-center">
        {id ? (
          <>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://zepyizkxoajxozosiskc.supabase.co/storage/v1/object/public/products/${id}.png)`,
              }}
            />
          </>
        ) : (
          <CardPlaceholder />
        )}
      </div>
      <div className="flex flex-col gap-[5px] md:gap-[10px] xl:gap-[12px] 3xl:gap-[16px] min-h-[80px] md:min-h-[100px]">
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
