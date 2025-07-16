import type { FC } from 'react';
import React from 'react';
import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

import Product from '@/src/pages/product/Product';
import type { Product as ProductInterface } from '@/src/entities/product/product.interface';
import CarouselProduct from '@/src/shared/ui/carousel-product/CarouselProduct';

// Отключаем статическую генерацию для этой страницы
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const prisma = new PrismaClient();

const getProduct = async (id: string): Promise<ProductInterface | null> => {
  try {
    // Напрямую обращаемся к базе данных
    const product = await prisma.product.findUnique({
      where: { id },
      include: { images: true },
    });

    if (!product) {
      return null;
    }

    // Преобразуем Date в строки для совместимости с интерфейсом
    return {
      ...product,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

const Page: FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const id = (await params).id;
  const prod = await getProduct(id);
  if (!prod) {
    notFound();
  }
  return (
    <div className="flex justify-center items-center flex-col gap-[92px] sm:gap-[120px] md:gap-[97px] 2xl:gap-[146px]">
      <Product product={prod} />

      <CarouselProduct />
    </div>
  );
};

export default Page;
