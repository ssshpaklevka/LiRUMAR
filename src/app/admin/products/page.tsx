import React from 'react';
import { PrismaClient } from '@prisma/client';

import { requireAdmin } from '@/src/lib/auth';

import ProductsManager from './components/ProductsManager';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

async function getProducts() {
  const products = await prisma.product.findMany({
    include: { images: true },
    orderBy: { createdAt: 'desc' },
  });

  // Преобразуем даты в строки для совместимости с интерфейсом
  return products.map((product) => ({
    ...product,
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }));
}

export default async function ProductsPage(): Promise<React.JSX.Element> {
  await requireAdmin();
  const products = await getProducts();

  return (
    <div className="min-h-screen px-4">
      <ProductsManager initialProducts={products} />
    </div>
  );
}
