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
    <div className="flex flex-col">
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="w-full" variants={imageVariants}>
          <Image
            className="w-full"
            src={'/img/uniqueness/man.webp'}
            alt="man"
            width={987}
            height={1009}
          />
        </motion.div>

        <motion.div className="w-full" variants={imageVariants}>
          <Image
            className="w-full h-full"
            src={'/img/uniqueness/ARS05699.webp'}
            alt="man"
            width={987}
            height={1009}
          />
        </motion.div>
      </motion.div>

      <div className="w-full mt-[30px] md:mt-[50px] xlmt-[40px] 3xl:mt-[60px]">
        <p className="text-left xl:text-center text-[30px] leading-[33px] md:text-[59px] md:leading-[65px] xl:text-[44px] xl:leading-[48px] 3xl:text-[79px] 3xl:leading-[87px]">
          Готовые модели доставим уже сегодня.
        </p>
        <p className="text-right xl:text-center text-[14px] leading-[16px] md:text-[25px] md:leading-[30px] xl:text-[19px] xl:leading-[22px] 3xl:text-[25px] 3xl:leading-[30px] mt-[20px]">
          Новую пару создадим в течении недели
        </p>
      </div>
    </div>
  );
};

export default AttentionDetail;
