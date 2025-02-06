'use client';
import type { FC } from 'react';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Container from '@/src/shared/ui/containers/Container';

import CategoryItem from './CategoryItem';

const Categories: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="w-full"
    >
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div variants={itemVariants}>
          <CategoryItem
            style="left"
            src="/img/categories/shoes1.png"
            link="/catalog"
            filterType="Обувь"
            title="Обувь"
            className="origin-bottom-left group-hover:scale-110 transition-all duration-300 ease-in-out text-[44px] leading-[29px] md:text-[59px] md:leading-[52px] xl:text-[45px] xl:leading-[40px] 3xl:text-[59px] 3xl:leading-[52px] m-[25px] ml-[40px] md:m-[45px] md:ml-[60px]"
            classText="text-left md:text-left"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CategoryItem
            style="right"
            src="/img/categories/accesories.webp"
            link="/catalog"
            filterType="Аксессуары"
            title="Аксессуары"
            className="origin-bottom-right group-hover:scale-110 transition-all duration-300 ease-in-out text-[44px] leading-[29px] md:text-[59px] md:leading-[52px] xl:text-[45px] xl:leading-[40px] 3xl:text-[59px] 3xl:leading-[52px] m-[25px] mr-[40px] md:m-[45px] md:mr-[60px]"
            classText="text-left md:text-right"
          />
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Categories;
