'use client';
import type { FC } from 'react';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const YourStatus: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // анимация произойдет только один раз
    amount: 0.5, // триггер когда 30% элемента видно
    margin: '0px 0px -100px 0px', // отступ для триггера
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col relative"
    >
      <div className="h-[350px] sm:h-[450px] flex items-end xl:items-center flex-row xl:pt-[96px] gap-24">
        <motion.p
          variants={itemVariants}
          className="mt-[160px] md:mt-0 text-[33px] leading-[36px] md:text-[60px] md:leading-[66px] xl:text-[45px] xl:leading-[50px] xl:max-w-[600px] 3xl:text-[79px] 3xl:leading-[87px] 3xl:max-w-[1060px] absolute z-10"
        >
          <motion.span
            variants={itemVariants}
            className="subfont text-[38px] leading-[42px] md:text-[69px] md:leading-[76px] xl:text-[50px] xl:leading-[55px] 3xl:text-[96px] 3xl:leading-[105px]"
          >
            — уникальность,{' '}
          </motion.span>
          которая подчеркивает ваш статус
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="filter brightness-50 grayscale absolute right-0 3xl:mr-[250px] top-0 3xl:top-6 z-0 w-[267px] h-[305px] sm:w-[390px] sm:h-[420px] xl:w-[490px] xl:h-[580px] 3xl:w-[584px] 3xl:h-[667px]"
          style={{
            backgroundImage: 'url("/img/uniqueness/shoes.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div className="pt-16 xl:pt-0 xl:pl-[170px] 3xl:pt-[80px]">
        <motion.div
          variants={itemVariants}
          className="filter brightness-50 grayscale w-[240px] h-[287px] sm:w-[290px] sm:h-[320px] xl:w-[313px] xl:h-[360px] 3xl:w-[497px] 3xl:h-[571px]"
          style={{
            backgroundImage: 'url("/img/uniqueness/sneakers.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </motion.div>
  );
};

export default YourStatus;
