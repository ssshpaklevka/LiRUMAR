import { writeFile } from 'fs/promises';
import path from 'path';
import process from 'process';

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'Файл не найден' }, { status: 400 });
    }

    // Проверяем тип файла
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Файл должен быть изображением' },
        { status: 400 },
      );
    }

    // Создаем уникальное имя файла
    const fileExtension = path.extname(file.name);
    const filename = `${uuidv4()}${fileExtension}`;
    const filepath = path.join(
      process.cwd(),
      'public/uploads/products',
      filename,
    );

    // Сохраняем файл
    const bytes = await file.arrayBuffer();
    const buffer = new Uint8Array(bytes);
    await writeFile(filepath, buffer);

    return NextResponse.json({
      filename,
      path: `/uploads/products/${filename}`,
      size: file.size,
      type: file.type,
    });
  } catch {
    return NextResponse.json(
      { error: 'Ошибка загрузки файла' },
      { status: 500 },
    );
  }
}
