'use client';
import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';

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
  const inView = useInView(ref, {
    once: true, // анимация произойдет только один раз
    amount: 0.2, // элемент считается видимым, когда 30% его находится в viewport
  });

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.3, // небольшая задержка после появления первого текста
      },
    },
  };

  const imageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const thumbnailVariants = {
    enter: { opacity: 0.5, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0.5, scale: 0.95 },
  };

  return (
    <Container
      style={{ justifyItems: 'center' }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[23px] 2xl:gap-[37px]"
    >
      <div
        ref={ref}
        className="w-full flex flex-col justify-end gap-[60px] md:gap-[82px] xl:gap-[87px]"
      >
        <div className="flex flex-col gap-[30px] sm:gap-[40px] md:gap-[45px] 3xl:gap-[65px]">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:w-[488px] 2xl:w-[755px] text-[14px] leading-[19px] sm:text-[25px] sm:leading-[35px] md:text-[16px] md:leading-[22px] 2xl:text-[25px] 2xl:leading-[35px]"
          >
            Наши изделия создаются исключительно из натуральных премиум
            материалов, таких как
          </motion.p>
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="subfont font-normal text-[45px] leading-[38px] sm:text-[95px] sm:leading-[92px] md:text-[59px] md:leading-[52px] 2xl:text-[105px] 2xl:leading-[92px]"
          >
            {renderHeadingWithBreak(mainImage?.heading)}
          </motion.h1>
        </div>
        <div className="w-full md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={mainImage?.imageUrl}
              initial="enter"
              animate="center"
              exit="exit"
              variants={imageVariants}
              transition={{ duration: 0.3 }}
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
          <div className="flex justify-between w-full flex-row gap-[14px]">
            {currentImageData.slice(1).map((item, index) => (
              <AnimatePresence mode="wait" key={item.imageUrl}>
                <motion.div
                  key={item.imageUrl}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={thumbnailVariants}
                  transition={{ duration: 0.3 }} // Быстрая анимация
                >
                  <Image
                    src={item.imageUrl}
                    width={177}
                    height={178}
                    alt={item.heading}
                    onClick={() => handleSmallImageClick(index + 1)}
                    className={`aspect-square h-full w-full sm:size-[120px] md:size-[124px] lg:size-[174px] xl:size-[224px] 2xl:size-[264px] 3xl:size-[300px] ${
                      mainImage?.imageUrl === item.imageUrl
                        ? ''
                        : 'filter brightness-50'
                    }`}
                    style={{ cursor: 'pointer' }}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={mainImage?.imageUrl}
            initial="enter"
            animate="center"
            exit="exit"
            variants={imageVariants}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
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
          <AnimatePresence mode="wait" key={item.imageUrl}>
            <motion.div
              key={item.imageUrl}
              initial="enter"
              animate="center"
              exit="exit"
              variants={thumbnailVariants}
              transition={{ duration: 0.3 }} // Быстрая анимация
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
          </AnimatePresence>
        ))}
      </div>
    </Container>
  );
};

export default PremiumMaterials;
