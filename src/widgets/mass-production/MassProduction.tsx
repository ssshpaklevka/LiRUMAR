'use client';
import type { FC } from 'react';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

import { Button } from '@/src/shared/ui/button';

const MassProduction: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 1.05, // уменьшил начальный масштаб
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2, // увеличил длительность
        ease: [0.25, 0.1, 0.25, 1], // более плавная кривая
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6, // увеличил задержку
        staggerChildren: 0.3, // увеличил промежуток
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20, // уменьшил смещение
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // увеличил длительность
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 15, // уменьшил смещение
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2, // добавил небольшую задержку
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      scale: 1.03, // уменьшил эффект наведения
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.97, // сделал tap эффект менее заметным
      transition: {
        duration: 0.1,
      },
    },
  };

  // Отдельные варианты для заголовка и подзаголовка
  const mobileHeadingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2, // Небольшая задержка для заголовка
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const mobileSubtitleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4, // Больше задержка для подзаголовка
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  const mobileButtonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6, // Появляется последней
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };
  return (
    <div className="px-0 w-full 3xl:flex 3xl:justify-center" ref={ref}>
      {/* Десктоп версия */}
      <div className="hidden xl:block">
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="xl:h-[664px] 3xl:h-[1025px] opacity-[50%] w-full 3xl:w-screen bg-cover flex flex-col items-center justify-center gap-[62px]"
          style={{
            backgroundImage: 'url("/img/mass-production/Group 149.webp")',
            // backgroundPosition: 'center',
          }}
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col items-center gap-[35px]"
          >
            <motion.p
              variants={itemVariants}
              className="text-[44px] sm:w-[850px] xl:w-[850px] 3xl:w-[1380px] text-center leading-[52px] 2xl:text-[79px] 2xl:leading-[95px]"
            >
              Нашим изделиям нет места в массовом производстве
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="w-[470px] 3xl:w-[700px] text-center leading-[19px] 2xl:text-[25px] 2xl:leading-[30px]"
            >
              Каждая единица изготавливается в ручную, индивидуально под каждого
              клиента
            </motion.p>
          </motion.div>

          <Link href={'/catalog'}>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size={'lg'}
                className="transition-all duration-300 ease-in-out hover:bg-transparent hover:text-foreground hover:border hover:border-[#D9D9D9] border-[#D9D9D9] w-[360px] 2xl:w-[576px] 2xl:h-[104px] 2xl:text-[25px] 2xl:leading-[30px]"
              >
                Смотреть каталог
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Мобильная версия */}
      <div className="block xl:hidden lg:px-0">
        <div
          className="aspect-square bg-center h-[642px] md:h-[663px] w-full bg-cover bg-black flex flex-col items-center justify-center gap-[37px] md:gap-[60px] xl:gap-[60px] 3xl:gap-[80px]"
          style={{
            backgroundImage: 'url("/img/mass-production/frameph 1.webp")',
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-[30px] md:gap-[60px] xl:gap-[36px] 3xl:gap-[60px]"
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={mobileHeadingVariants}
              className="text-[33px] leading-[40px] w-[330] sm:text-[59px] sm:leading-[70px] sm:w-[620px] text-center"
            >
              Нашим изделиям нет места в массовом производстве
            </motion.p>
            <motion.p
              variants={mobileSubtitleVariants}
              className="text-[14px] leading-[16px] sm:text-[25px] sm:leading-[30px] sm:max-w-[590px] text-center"
            >
              Каждая единица изготавливается в ручную, индивидуально под каждого
              клиента
            </motion.p>
          </motion.div>

          <motion.div
            variants={mobileButtonVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover="hover"
          >
            <Link href={'/catalog'}>
              <Button
                size={'lg'}
                className="transition-all duration-300 ease-in-out hover:bg-transparent hover:text-foreground hover:border hover:border-[#D9D9D9] border-[#D9D9D9] w-[236px] h-[65px] text-[14px] leading-[16px] sm:w-[432px] sm:h-[120px] sm:text-[25px] sm:leading-[30px]"
              >
                Смотреть каталог
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MassProduction;
