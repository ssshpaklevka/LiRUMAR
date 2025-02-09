'use client';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

import CreateRequest from '@/src/features/create-request/CreateRequest.';
import { cn } from '@/src/shared/lib/utils';

const Hero: FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex justify-center items-center -mt-[60px] pb-[120px] sm:pb-[140px] md:pb-[240px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 bg-cover pointer-events-none"
        style={{ backgroundImage: 'url("/img/hero/frame.webp")' }}
      />

      {/* Пк версия */}
      <div className="hidden lg:block">
        <div className="px-5 w-full flex flex-col items-center h-full gap-[63px] relative mt-[300px]">
          <div className="flex justify-center flex-col lg:flex-row lg:gap-0 gap-[73px] items-center relative h-full 2xl:w-full">
            <motion.div
              {...fadeInUp}
              className="z-20 md:max-w-[260px] w-full lg:relative flex h-full"
            >
              <motion.h1
                {...fadeIn}
                className="relative w-[220px] text-left text-[14px] leading-[16px] sm:text-[25px] sm:leading-[30px] md:text-[16px] md:leading-[19px] 3xl:text-[25px] 3xl:leading-[30px]"
              >
                <div className="absolute -inset-4 bg-black/30 blur-xl -z-10 rounded-full" />
                Ручная работа из экзотической кожи для тех, кто ценит статус и
                индивидуальность.
              </motion.h1>
              <motion.h1
                {...fadeInUp}
                className={cn(
                  'relative left-0 top-0 lg:top-[calc(50%-170px)] 2xl:top-[calc(50%-200px)] -translate-y-1/2 z-[999] text-nowrap',
                  'absolute font-normal tracking-[-3.5px] text-[33px] leading-[33px] sm:text-[59px] sm:leading-[59px] md:text-[61px] md:leading-[61px] 3xl:text-[105px] 3xl:leading-[105px] 2xl:font-normal',
                )}
              >
                <span
                  className={cn(
                    'lir text-[33px] leading-[33px] sm:text-[59px] sm:leading-[59px] md:text-[61px] md:leading-[61px] tracking-[-3px] 3xl:text-[105px] 3xl:leading-[105px]',
                  )}
                >
                  LiRUMAR{' '}
                </span>
                — Искусство
                <br />
                быть неповторимым
              </motion.h1>
            </motion.div>

            <motion.div
              {...scaleIn}
              className="max-h-[calc(100vh-11.111vh)] relative"
            >
              <Image
                src="/img/hero/ARS061131.webp"
                alt="hero"
                width={4000}
                height={4000}
                className="h-full w-auto md:block hidden 2xl:h-[820px] 2xl:w-[700px] 3xl:h-[1214px] 3xl:w-[1024px]"
                style={{ marginTop: '-160px' }}
              />
            </motion.div>

            <motion.div {...fadeInUp} className="z-50">
              <CreateRequest
                variant="big"
                className="flex-none h-[50px] w-[302px] sm:h-[92px] sm:w-[553px] md:h-[88px] md:w-[260px] 2xl:h-[140px] 2xl:text-[19px] 2xl:leading-[16px] cursor-pointer"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Мобильная версия */}
      <div className="block lg:hidden">
        <div className="px-5 w-full flex flex-col items-center h-full gap-[63px] relative mt-[270px]">
          <div className="flex justify-center flex-col lg:flex-row items-center relative h-full 2xl:w-full">
            <motion.div
              {...fadeInUp}
              className="z-20 2xl:max-w-[416px] md:max-w-[260px] w-full lg:relative flex"
            >
              <motion.h1
                {...fadeInUp}
                className={cn(
                  'relative -top-24 left-0 lg:top-[calc(50%-170px)] 2xl:top-[calc(50%-200px)] -translate-y-1/2  -translate-x-1/1 z-[999] text-nowrap',
                  'absolute font-normal tracking-[-1px] text-[33px] leading-[33px] sm:text-[44px] sm:leading-[44px] md:text-[61px] md:leading-[61px] 2xl:text-[105px] 2xl:leading-[105px] 2xl:font-normal',
                )}
              >
                <svg
                  className="absolute -top-12 -left-20 md:-top-[110px] md:-left-32 -z-10 w-[449px] h-[144px] md:w-[822px] md:h-[263px] blur-[100px]"
                  viewBox="0 0 822 263"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="411"
                    cy="131.5"
                    rx="411"
                    ry="131.5"
                    fill="hsla(0, 0%, 4%, 0.5)"
                  />
                </svg>
                <span
                  className={cn(
                    'lir text-[33px] leading-[33px] sm:text-[44px] sm:leading-[44px] md:text-[61px] md:leading-[61px] tracking-[-0.5px] 2xl:text-[105px] 2xl:leading-[105px]',
                  )}
                >
                  LiRUMAR{' '}
                </span>
                — Искусство
                <br />
                быть неповторимым
              </motion.h1>
            </motion.div>

            <div className="flex flex-col items-center w-auto gap-[40px] sm:gap-[73px]">
              <motion.div
                {...scaleIn}
                className="max-h-[calc(100vh-11.111vh)] relative w-auto"
              >
                <Image
                  src="/img/hero/DSC09297-1.webp"
                  alt="hero"
                  width={4000}
                  height={4000}
                  className="w-auto h-futo ssm:h-[870px] sm:w-[661px] sm:h-[924px]"
                  style={{ marginTop: '-160px' }}
                />
                <div className="absolute bottom-5 right-5">
                  <svg
                    className="absolute -right-32 -top-16 md:-right-72 md:-top-32 w-[548px] h-[186px] md:w-[904px] md:h-[300px] blur-[150px]"
                    viewBox="0 0 1004 340"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="502"
                      cy="170"
                      rx="502"
                      ry="170"
                      fill="hsla(0, 0%, 4%, 0.5)"
                    />
                  </svg>
                  {/* fill="hsla(0, 0%, 4%, 0.5)" */}
                  {/* тень */}
                  <motion.h1
                    {...fadeIn}
                    className="relative text-right w-[314px] sm:w-[390px] text-[14px] leading-[16px] sm:text-[16px] sm:leading-[19px] 2xl:text-[25px] 2xl:leading-[30px] z-10"
                  >
                    Ручная работа из экзотической кожи для тех, кто ценит статус
                    и индивидуальность.
                  </motion.h1>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="z-50 w-full">
                <CreateRequest
                  variant="big"
                  className="flex-none h-[50px] md:h-[88px] w-full cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen overflow-x-hidden h-[450px] flex justify-center items-center absolute -bottom-[0px] z-[0] transform translate-y-1/2"
      >
        <div
          className="w-[100vw] bg-background blur-[50px]"
          style={{ borderRadius: '0%' }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
