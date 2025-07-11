import { readFile } from 'fs/promises';
import path from 'path';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ filename: string }> },
): Promise<NextResponse> {
  try {
    const { filename } = await params;

    // Путь к файлу изображения
    const filePath = path.join(
      process.cwd(),
      'public',
      'uploads',
      'products',
      filename,
    );

    // Читаем файл
    const fileBuffer = await readFile(filePath);

    // Определяем тип файла по расширению
    const ext = path.extname(filename).toLowerCase();
    let contentType = 'image/jpeg'; // по умолчанию

    if (ext === '.png') contentType = 'image/png';
    else if (ext === '.gif') contentType = 'image/gif';
    else if (ext === '.webp') contentType = 'image/webp';
    else if (ext === '.svg') contentType = 'image/svg+xml';

    // Возвращаем изображение
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving image:', error);
    return new NextResponse('Image not found', { status: 404 });
  }
}
