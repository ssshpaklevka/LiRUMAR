'use client';
import type { FC } from 'react';
import React, { useState } from 'react';
import Image from 'next/image';
import { LoaderCircle } from 'lucide-react';

import Container from '@/src/shared/ui/containers/Container';
import CardPlaceholder from '@/src/shared/ui/assets/card-placeholder/CardPlaceholder';
import { Button } from '@/src/shared/ui/button';
import type { Product as ProductInterface } from '@/src/entities/product/product.interface';
import CreateRequest from '@/src/features/create-request/CreateRequest.';

interface Props {
  product: ProductInterface;
}

const Product: FC<Props> = ({ product }) => {
  const [mainImageError, setMainImageError] = useState(false);
  const [thumbnailErrors, setThumbnailErrors] = useState([false, false]);
  const [isMainImageLoading, setIsMainImageLoading] = useState(true);
  const [isThumbnailsLoading, setIsThumbnailsLoading] = useState([true, true]);
  if (!product) {
    return <div>Товар не найден</div>;
  }
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };
  const descriptionLines = product.full_description
    ? product.full_description.split('\n')
    : [];
  return (
    <Container className="mt-[95px] grid grid-cols-1 xl:grid-cols-[760px_2fr] 2xl:grid-cols-[1100px_2fr] gap-5 p-5">
      <div className="flex gap-[20px] flex-col sm:flex-row">
        <div className="relative w-full h-auto min-h-[359px] bg-[#2C2C2C] flex justify-center items-center">
          {product && !mainImageError ? (
            <>
              {isMainImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <LoaderCircle className="w-10 h-10 text-gray-500 animate-spin" />
                </div>
              )}
              <Image
                src={`https://zepyizkxoajxozosiskc.supabase.co/storage/v1/object/public/products/${product.id}.png`}
                layout="fill"
                objectFit="cover"
                alt={product.name}
                onError={() => setMainImageError(true)}
                onLoad={() => setIsMainImageLoading(false)}
              />
            </>
          ) : (
            <CardPlaceholder />
          )}
        </div>
        <div className="flex flex-row sm:flex-col justify-between gap-5 2xl:gap-[34px]">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="relative w-full sm:size-[275px] 2xl:size-[446px] aspect-square bg-[#2C2C2C] flex items-center justify-center"
            >
              {product && !thumbnailErrors[index] ? (
                <>
                  {isThumbnailsLoading[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <LoaderCircle className="w-8 h-8 text-gray-500 animate-spin" />
                    </div>
                  )}
                  <Image
                    src={`https://zepyizkxoajxozosiskc.supabase.co/storage/v1/object/public/products/${product.id}-${index + 1}.png`}
                    layout="fill"
                    objectFit="cover"
                    alt={`Thumbnail ${index + 1}`}
                    className="rounded-md w-full"
                    onError={() =>
                      setThumbnailErrors((prev) => {
                        const newErrors = [...prev];
                        newErrors[index] = true;
                        return newErrors;
                      })
                    }
                    onLoad={() =>
                      setIsThumbnailsLoading((prev) => {
                        const newLoading = [...prev];
                        newLoading[index] = false;
                        return newLoading;
                      })
                    }
                  />
                </>
              ) : (
                <CardPlaceholder />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5 sm:gap-10 xl:gap-28 2xl:gap-[170px]">
        <h2 className="text-[25px] leading-[25px] sm:text-[44px] sm:leading-[44px] md:text-[33px] md:leading-[33px] 2xl:text-[44px] 2xl:leading-[44px] font-normal">
          {product && product.name}
        </h2>

        <div className="text-[14px] leading-[21px] sm:text-[25px] sm:leading-[37px] md:text-[16px] md:leading-[24px] 2xl:text-[25px] 2xl:leading-[37px] opacity-[60%]">
          <div className="pb-[6px]">
            <p>{product.description}</p>
            <br />
            {descriptionLines.map((line, index) => (
              <p key={index} className="mt-1">
                一 {line}
              </p>
            ))}
            一 Цвет: {product.color.toLowerCase()}
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[25px] leading-[30px] sm:text-[44px] sm:leading-[52px] md:text-[25px] md:leading-[30px] 2xl:text-[44px] 2xl:leading-[53px]">
            {product && formatPrice(product.price)} ₽
          </p>
          <CreateRequest
            product={product}
            variant="buy"
            className="transition-all duration-300 ease-in-out hover:bg-transparent hover:text-foreground hover:border hover:border-[#D9D9D9] border text-[16px] leading-[19px] h-[51px] sm:text-[25px] sm:leading-[30px] sm:h-[94px] md:text-[16px] md:leading-[19px] md:h-[47px] 2xl:text-[25px] 2xl:leading-[30px] 2xl:h-[75px]"
          />
          <div className="flex justify-between gap-[22px] md:gap-10 xl:gap-5 3xl:gap-8">
            <Button
              variant="outline"
              className="text-[11px] leading-[13px] h-[52px] sm:text-[19px] sm:leading-[22px] sm:h-[94px] md:text-[11px] md:leading-[13px] md:h-[47px] 2xl:text-[19px] 2xl:leading-[23px] 2xl:h-[75px] border-[#D9D9D9] w-full justify-center gap-[35px]"
            >
              WhatsApp
              <Image
                src="/img/footer/wa-black.svg"
                alt="wa"
                width={25}
                height={25}
              />
            </Button>
            <Button
              variant="outline"
              className="text-[11px] leading-[13px] h-[52px] sm:text-[19px] sm:leading-[22px] sm:h-[94px] md:text-[11px] md:leading-[13px] md:h-[47px] 2xl:text-[19px] 2xl:leading-[23px] 2xl:h-[75px] border-[#D9D9D9] w-full justify-center gap-[35px]"
            >
              Telegram
              <Image
                src="/img/footer/tg-black.svg"
                alt="tg"
                width={25}
                height={25}
              />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
