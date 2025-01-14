import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';

import Container from '@/src/shared/ui/containers/Container';
import CardPlaceholder from '@/src/shared/ui/assets/card-placeholder/CardPlaceholder';
import { Button } from '@/src/shared/ui/button';
import type { Product as ProductInterface } from '@/src/entities/product/product.interface';
import CreateRequest from '@/src/features/create-request/CreateRequest.';

interface Props {
  product: ProductInterface;
}

const Product: FC<Props> = ({ product }) => {
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
    <Container className="mt-[95px] grid grid-cols-1 xl:grid-cols-[760px_2fr] gap-5 p-5">
      <div className="flex gap-[20px] flex-col sm:flex-row">
        <div className="relative w-full h-auto min-h-[359px] bg-[#2C2C2C] flex justify-center items-center">
          {product && product.url ? (
            <Image
              src={product.url}
              layout="fill"
              objectFit="cover"
              alt={product.name}
            />
          ) : (
            <CardPlaceholder />
          )}
        </div>
        <div className="flex flex-row sm:flex-col justify-between gap-5">
          {product.thumbnailUrls && product.thumbnailUrls.length > 0 ? (
            product.thumbnailUrls.map((url, index) => (
              <div
                key={index}
                className="relative size-[275px] aspect-square bg-gray-200"
              >
                {url ? (
                  <Image
                    src={url}
                    layout="fill"
                    objectFit="cover"
                    alt={`Thumbnail ${index + 1}`}
                    className="rounded-md"
                  />
                ) : (
                  <CardPlaceholder />
                )}
              </div>
            ))
          ) : (
            // Если нет миниатюр, показываем пустые плейсхолдеры
            <>
              <div className="relative w-[275px]  h-[275px] bg-[#2C2C2C] flex justify-center items-center">
                <CardPlaceholder />
              </div>
              <div className="relative w-[275px]  h-[275px] bg-[#2C2C2C] flex justify-center items-center">
                <CardPlaceholder />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5 sm:gap-10 xl:gap-28">
        <h2 className="text-[25px] leading-[25px] sm:text-[44px] sm:leading-[44px] md:text-[33px] md:leading-[33px] font-normal">
          {product && product.name}
        </h2>

        <div className="text-[14px] leading-[21px] sm:text-[25px] sm:leading-[37px] md:text-[16px] md:leading-[24px] opacity-[60%]">
          <div>
            <p>{product.description}</p>
            <br />
            {descriptionLines.map((line, index) => (
              <p key={index} className="mt-2">
                一 {line}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[25px] leading-[30px] sm:text-[44px] sm:leading-[52px] md:text-[25px] md:leading-[30px]">
            {product && formatPrice(product.price)} ₽
          </p>
          <CreateRequest
            product={product}
            variant="buy"
            className="text-[16px] leading-[19px] h-[51px] sm:text-[25px] sm:leading-[30px] sm:h-[94px] md:text-[16px] md:leading-[19px] md:h-[47px]"
          />
          <div className="flex justify-between gap-10 md:gap-5">
            <Button
              variant="outline"
              className="text-[11px] leading-[13px] h-[52px] sm:text-[19px] sm:leading-[22px] sm:h-[94px] md:text-[11px] md:leading-[13px] md:h-[47px]  border-[#D9D9D9] w-full justify-center gap-[35px]"
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
              className="text-[11px] leading-[13px] h-[52px] sm:text-[19px] sm:leading-[22px] sm:h-[94px] md:text-[11px] md:leading-[13px] md:h-[47px]   border-[#D9D9D9] w-full justify-center gap-[35px]"
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
