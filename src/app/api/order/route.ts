import process from 'process';

import { Bot } from 'grammy';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import escapeMessage from '@/src/shared/lib/escape-message';

// Токен бота
const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;

if (!token) {
  throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.');
}

const bot = new Bot(token);
const adminChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHATID; // ID для отправки сообщений

if (!adminChatId) {
  throw new Error('TELEGRAM_CHATID environment variable not found.');
}

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const data = await req.json();

    if (!data) {
      return new NextResponse('Bad Request', { status: 400 });
    }

    const {
      name,
      phone,
      email,
      nameProd,
      descriptionProd,
      allDescriptionProd,
      priceProd,
      link,
    } = data;

    const formattedMessage = `
🌟🌟🌟 *Новая заявка на заказ* 🌟🌟🌟

👤 *Имя клиента:*  ${name || 'Не указано'}
📞 *Телефон:* ${phone || 'Не указан'}
📧 *Email:* ${email || 'Не указан'}

🛒 *Информация о товаре:*
   ▪️ *Наименование:* ${nameProd || 'Товар не выбран'}
   ▪️ *Описание:* ${descriptionProd || 'Товар не выбран'}
   ▪️ *Полное описание:* ${allDescriptionProd || 'Товар не выбран'}
   ▪️ *Стоимость:* ${priceProd || 'Товар не выбран'}
   ▪️ *Ссылка на товар:* ${link || 'Товар не выбран'}
`;

    await bot.api.sendMessage(adminChatId, escapeMessage(formattedMessage), {
      parse_mode: 'MarkdownV2',
    });

    return new NextResponse('OK', { status: 200 });
  } catch {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
