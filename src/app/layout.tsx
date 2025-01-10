/* eslint-disable import/order */
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import type { FC } from 'react';
import React from 'react';

import { cn } from '../shared/lib/utils';
import Header from '../widgets/header/Header';
import Footer from '../widgets/footer/Footer';

export const involve = localFont({
  src: [
    {
      path: '../../public/fonts/Involve.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-involve',
});

export const tnr = localFont({
  src: [
    {
      path: '../../public/fonts/TimesNewRoman.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-tnr',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lirumar.ru/'),
  title:
    'Магазин обуви и аксессуаров ручной работы | LiRUMAR — Искусство быть неповторимым',
  description:
    'Ручная работа из экзотической кожи для тех, кто ценит статус и индивидуальность. Уникальные изделия премиум-класса, подчеркивающие вашу исключительность.',
  keywords: [
    'ручная работа',
    'обувь из экзотической кожи',
    'аксессуары ручной работы',
    'эксклюзивные аксессуары',
    'обувь премиум-класса',
    'кожа крокодила',
    'уникальные изделия из кожи',
    'статусные аксессуары',
    'индивидуальные изделия из кожи',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      'Магазин обуви и аксессуаров ручной работы | LiRUMAR — Искусство быть неповторимым',
    description:
      'Наши изделия из экзотической кожи — это уникальность и статус, которые подчеркивают вашу индивидуальность. Исключительно натуральные материалы и безупречное внимание к деталям.',
    url: 'https://lirumar.ru/',
    siteName: 'LiRUMAR — Искусство быть неповторимым',
    images: [
      {
        url: '/assets/og-image-lirumar.png',
        width: 1200,
        height: 630,
        alt: 'LiRUMAR — Обувь и аксессуары ручной работы из экзотической кожи',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={cn('antialiased', involve.variable, tnr.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
