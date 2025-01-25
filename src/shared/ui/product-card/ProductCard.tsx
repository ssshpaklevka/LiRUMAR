'use client';
import Image from 'next/image';
import type { FC } from 'react';
import React, { useState } from 'react';
import Link from 'next/link';
import { LoaderCircle } from 'lucide-react';

import CardPlaceholder from '../assets/card-placeholder/CardPlaceholder';

interface Props {
  id: string;
  url?: string;
  name: string;
  price: number;
}

const ProductCard: FC<Props> = ({ id, name, price }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };
  return (
    <Link
      className="hover:scale-95 transition-all duration-300 flex flex-col gap-[20px]"
      href={`/catalog/${id}`}
    >
      <div className="relative w-full h-[277px] 2xl:h-[433px] bg-[#2C2C2C] flex justify-center items-center">
        {id && !imageError ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoaderCircle className="w-10 h-10 text-gray-500 animate-spin" />
              </div>
            )}
            <Image
              src={`https://zepyizkxoajxozosiskc.supabase.co/storage/v1/object/public/products/${id}.png`}
              layout="fill"
              objectFit="cover"
              alt={name}
              onError={() => setImageError(true)}
              onLoad={() => setIsLoading(false)}
            />
          </>
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
