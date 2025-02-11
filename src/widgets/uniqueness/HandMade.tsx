'use client';
import Image from 'next/image';
import { useRef, type FC } from 'react';
import { motion, useInView } from 'framer-motion';

import { cn } from '@/src/shared/lib/utils';

const HandMade: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const pointerVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <div className="flex flex-col" ref={ref}>
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative w-full h-[371px] md:h-[680px] xl:h-[540px] 2xl:h-[550px] 3xl:h-[835px]"
      >
        <Image
          className="object-cover w-full h-[371px] md:h-[680px] xl:h-[540px] 2xl:h-[550px] 3xl:h-[835px]"
          src={'/img/uniqueness/uniqueness2.webp'}
          alt="uniqueness"
          width={2000}
          height={2000}
        />
      </motion.div>
      <div className="w-full relative">
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-[41px] text-[33px] leading-[29px] sssm:text-[26px] ssm:text-[33px] md:mt-[60px] md:text-[59px] md:leading-[53px] xl:mt-[56px] xl:text-[44px] xl:leading-[39px] 3xl:mt-[80px] 3xl:text-[70px] 3xl:leading-[63px] tracking-[0.5px]"
        >
          Ручная работа, экзотическая <br />
          <span
            className={cn(
              'subfont text-[33px] leading-[29px] sssm:text-[26px] ssm:text-[33px] md:text-[59px] md:leading-[53px] xl:text-[44px] xl:leading-[39px] 3xl:text-[80px] 3xl:leading-[72px] tracking-[0.5px]',
            )}
          >
            премиальная кожа
          </span>
        </motion.p>

        <motion.div
          variants={pointerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="absolute right-0 bottom-0"
        >
          <div className="relative">
            <Image
              src={'/img/uniqueness/pointerline.png'}
              alt="arrow"
              width={641}
              height={400}
              className="xl:w-[33.385vw] xl:h-auto lg:w-[27.344vw] lg:h-[400px] md:w-[27.344vw] md:h-[440px] sm:w-[30.344vw] sm:h-[230px] w-[30.344vw] h-[250px]"
            />
            <Image
              src={'/img/uniqueness/pointer.svg'}
              alt="arrow"
              width={64}
              height={64}
              className="absolute 3xl:top-0 3xl:-left-3 2xl:-left-3 2xl:-top-1 xl:-left-[20px] xl:-top-3 lg:-left-[30px] lg:-top-1 md:-left-[30px] md:-top-1 sm:-left-[10px] sm:-top-0 md:size-[64px] top-[0px] -left-[10px] size-[32px]"
            />
          </div>
          <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] xl:text-[19px] xl:leading-[29px] text-end underline underline-offset-8">
            Кожа питона
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HandMade;
