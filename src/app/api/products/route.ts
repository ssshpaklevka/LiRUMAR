import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(): Promise<NextResponse> {
  try {
    const products = await prisma.product.findMany({
      include: { images: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(products);
  } catch {
    return NextResponse.json(
      { error: 'Ошибка получения продуктов' },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const data = await req.json();
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        full_description: data.full_description,
        price: data.price,
        color: data.color,
        material: data.material,
        type: data.type,
        url: data.url,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Ошибка создания продукта' },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {
    const data = await req.json();
    const product = await prisma.product.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        full_description: data.full_description,
        price: data.price,
        color: data.color,
        material: data.material,
        type: data.type,
        url: data.url,
      },
      include: { images: true },
    });
    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      { error: 'Ошибка обновления продукта' },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { id } = await req.json();
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Ошибка удаления продукта' },
      { status: 500 },
    );
  }
}
