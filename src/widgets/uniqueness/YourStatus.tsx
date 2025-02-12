'use client';
import type { FC } from 'react';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const YourStatus: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // анимация произойдет только один раз
    amount: 0.2, // триггер когда 30% элемента видно
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
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      className="flex flex-col relative"
    >
      <div className="hidden xl:block" ref={ref}>
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
            className="filter brightness-50 grayscale absolute right-0 xl:mt-[20px] xl:mr-[105px] 3xl:mr-[187px] top-0 3xl:top-6 z-0 w-[267px] h-[305px] sm:w-[390px] sm:h-[420px] md:w-[490px] md:h-[559px] xl:w-[377px] xl:h-[430px] 3xl:w-[584px] 3xl:h-[667px]"
            style={{
              backgroundImage: 'url("/img/uniqueness/shoes.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
        <div className="pt-16 xl:pt-0 xl:pl-[144px] 3xl:pt-[80px]">
          <motion.div
            variants={itemVariants}
            className="filter brightness-50 grayscale w-[240px] h-[287px] sm:w-[290px] sm:h-[320px] md:w-[313px] md:h-[361px] xl:w-[320px] xl:h-[368px] 3xl:w-[497px] 3xl:h-[571px]"
            style={{
              backgroundImage: 'url("/img/uniqueness/sneakers.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </div>
      {/* мобилка планшет */}
      <div className="block xl:hidden">
        <div className="flex flex-col gap-[40px] md:gap-[100]">
          <div className="flex justify-end">
            <motion.div
              variants={itemVariants}
              className="flex filter brightness-50 grayscale z-0 w-[267px] h-[305px] md:w-[490px] md:h-[559px] xl:w-[377px] xl:h-[430px] 3xl:w-[584px] 3xl:h-[667px]"
              style={{
                backgroundImage: 'url("/img/uniqueness/shoes.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
          <motion.p
            variants={itemVariants}
            className="text-[31px] leading-[36px] md:text-[60px] md:leading-[66px] xl:text-[45px] xl:leading-[50px] xl:max-w-[600px] 3xl:text-[79px] 3xl:leading-[87px] 3xl:max-w-[1060px]"
          >
            <motion.span
              variants={itemVariants}
              className="subfont text-[36px] leading-[42px] md:text-[69px] md:leading-[76px] xl:text-[50px] xl:leading-[55px] 3xl:text-[96px] 3xl:leading-[105px]"
            >
              — уникальность,{' '}
            </motion.span>
            которая подчеркивает ваш статус
          </motion.p>
          <div>
            <motion.div
              variants={itemVariants}
              className="filter brightness-50 grayscale w-[171px] h-[197px] md:w-[313px] md:h-[361px] xl:w-[320px] xl:h-[368px] 3xl:w-[497px] 3xl:h-[571px]"
              style={{
                backgroundImage: 'url("/img/uniqueness/sneakers.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default YourStatus;
