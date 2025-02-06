'use client';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

const AttentionDetail: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Задержка между анимациями дочерних элементов
      },
    },
  };

  // Анимация для каждого изображения
  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // Начальное состояние: элемент невидим и смещен вниз
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Конечное состояние: элемент видим и на своем месте
  };
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
      initial="hidden" // Начальное состояние анимации
      whileInView="visible" // Анимация запускается, когда элемент появляется в области видимости
      viewport={{ once: true, amount: 0.2 }} // Анимация срабатывает только один раз и при появлении 20% элемента
      variants={containerVariants} // Применяем анимацию контейнера
    >
      {/* Первое изображение */}
      <motion.div className="w-full" variants={imageVariants}>
        <Image
          className="w-full"
          src={'/img/uniqueness/man.webp'}
          alt="man"
          width={987}
          height={1009}
        />
      </motion.div>

      {/* Второе изображение */}
      <motion.div className="w-full" variants={imageVariants}>
        <Image
          className="w-full h-full"
          src={'/img/uniqueness/women.webp'}
          alt="man"
          width={987}
          height={1009}
        />
      </motion.div>
    </motion.div>
  );
};

export default AttentionDetail;
