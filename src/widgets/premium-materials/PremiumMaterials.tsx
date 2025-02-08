'use client';
import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

import type { ImageDataItem } from '@/src/entities/image-premium/ImagePremium';
import Container from '@/src/shared/ui/containers/Container';

interface PremiumMaterialsProps {
  imageData: ImageDataItem[];
}

const PremiumMaterials: React.FC<PremiumMaterialsProps> = ({
  imageData: initialImageData,
}) => {
  const [currentImageData, setCurrentImageData] =
    useState<ImageDataItem[]>(initialImageData);

  const handleSmallImageClick = useCallback(
    (clickedIndex: number) => {
      if (clickedIndex === 0) {
        return;
      }

      setCurrentImageData((prevImageData) => {
        const newImageData = [...prevImageData];
        const clickedImage = newImageData[clickedIndex];
        const mainImage = newImageData[0];

        newImageData[clickedIndex] = mainImage;
        newImageData[0] = clickedImage;

        return newImageData;
      });
    },
    [setCurrentImageData],
  );

  const mainImage = currentImageData[0];

  const renderHeadingWithBreak = (heading: string) => {
    const [firstWord, ...restWords] = heading.split(' ');
    return (
      <>
        {firstWord}
        <br />
        {restWords.join(' ')}
      </>
    );
  };
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // увеличил задержку
        staggerChildren: 0.4, // увеличил промежуток между анимациями
        duration: 0.8, // увеличил длительность
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const smallImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
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
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
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
    >
      <Container
        style={{ justifyItems: 'center' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[23px] 2xl:gap-[37px]"
      >
        <div className="w-full flex flex-col justify-end gap-[60px] md:gap-[112px]">
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-[30px] sm:gap-[40px] md:gap-[45px] 3xl:gap-[65px]"
          >
            <motion.p
              variants={itemVariants}
              className="lg:w-[488px] 2xl:w-[755px] text-[14px] leading-[19px] sm:text-[25px] sm:leading-[35px] md:text-[16px] md:leading-[22px] 2xl:text-[25px] 2xl:leading-[35px] "
            >
              Наши изделия создаются исключительно из натуральных премиум
              материалов, таких как
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="subfont font-normal text-[45px] leading-[38px] sm:text-[95px] sm:leading-[92px] md:text-[59px] md:leading-[52px] 2xl:text-[105px] 2xl:leading-[92px] "
            >
              {renderHeadingWithBreak(mainImage?.heading)}
            </motion.h1>
          </motion.div>

          <div className="w-full md:hidden">
            <AnimatePresence>
              <motion.div
                key={mainImage?.imageUrl}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Image
                  className="aspect-square w-full h-full"
                  src={mainImage?.imageUrl || ''}
                  width={560}
                  height={560}
                  alt={mainImage?.heading}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:block">
            <motion.div
              variants={smallImageVariants}
              className="flex justify-between w-full flex-row gap-[14px]"
            >
              {currentImageData.slice(1).map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={item.imageUrl}
                    width={177}
                    height={178}
                    alt={item.heading}
                    onClick={() => handleSmallImageClick(index + 1)}
                    className={`aspect-square h-full w-full sm:size-[120px] md:size-[124px] lg:size-[174px] xl:size-[224px] 2xl:size-[264px] 3xl:size-[300px] ${mainImage?.imageUrl === item.imageUrl ? '' : 'filter brightness-50'}`}
                    style={{ cursor: 'pointer' }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="w-full hidden md:block">
          <AnimatePresence>
            <motion.div
              key={mainImage?.imageUrl}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Image
                className="aspect-square w-full h-full"
                src={mainImage?.imageUrl || ''}
                width={560}
                height={560}
                alt={mainImage?.heading}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between w-full flex-row gap-[14px] 2xl:gap-[37px] md:hidden">
          {currentImageData.slice(1).map((item, index) => (
            <motion.div
              key={index}
              variants={smallImageVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={item.imageUrl}
                width={177}
                height={178}
                alt={item.heading}
                onClick={() => handleSmallImageClick(index + 1)}
                className="aspect-square h-full w-full"
                style={{ cursor: 'pointer' }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
};

export default PremiumMaterials;
