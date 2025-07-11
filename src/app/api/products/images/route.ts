import fs from 'fs';
import path from 'path';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { imageId } = await req.json();

    // Получаем информацию об изображении
    const image = await prisma.productImage.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      return NextResponse.json(
        { error: 'Изображение не найдено' },
        { status: 404 },
      );
    }

    // Удаляем файл с диска
    const filePath = path.join(process.cwd(), 'public', image.path);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Удаляем запись из базы данных
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
