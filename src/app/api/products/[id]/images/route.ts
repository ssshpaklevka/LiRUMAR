import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  try {
    const { filename, path, order = 0 } = await req.json();

    const image = await prisma.productImage.create({
      data: {
        productId: params.id,
        filename,
        path,
        order,
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Ошибка добавления изображения' },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { imageId } = await req.json();

    await prisma.productImage.delete({
      where: { id: imageId },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Ошибка удаления изображения' },
      { status: 500 },
    );
  }
}
