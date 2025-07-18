'use client';

import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';

import CardPlaceholder from '../assets/card-placeholder/CardPlaceholder';

interface ProductImage {
  id: string;
  filename: string;
  path: string;
  order: number;
}

interface Props {
  id: string;
  url?: string;
  name: string;
  price: number;
  images?: ProductImage[];
}

const ProductCard: FC<Props> = ({ id, name, price, images }) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  return (
    <Link
      className="md:hover:scale-95 active:scale-95 transition-all duration-300 flex flex-col gap-[10px] md:gap-[15px] xl:gap-[20px] h-full"
      href={`/catalog/${id}`}
    >
      <div className="overflow-hidden relative w-full aspect-square bg-[#2C2C2C] flex justify-center items-center">
        {images && images.length > 0 ? (
          <img
            src={images[0].path}
            alt={name}
            className="w-full h-full object-cover"
          />
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
