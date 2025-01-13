'use client';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

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

  return (
    <Container className="grid grid-cols-2 justify-between gap-[23px]">
      <div className="flex flex-col justify-end gap-[84px]">
        <div className="flex flex-col gap-[45px]">
          <p className="w-[410px] leading-[22px]">
            Наши изделия создаются исключительно из натуральных премиум
            материалов, таких как
          </p>
          <h1 className="subfont text-[59px] leading-[52px]">
            {renderHeadingWithBreak(mainImage?.heading)}
          </h1>
        </div>
        <div className="flex flex-row gap-[18px]">
          {currentImageData.slice(1).map((item, index) => (
            // <div key={index} className="h-[178px]">
            <Image
              key={index}
              src={item.imageUrl}
              width={177}
              height={178}
              alt={item.heading}
              onClick={() => handleSmallImageClick(index + 1)}
              style={{ cursor: 'pointer' }}
            />
            // </div>
          ))}
        </div>
      </div>
      <div className="h-[560px]">
        <Image
          src={mainImage?.imageUrl || ''}
          width={560}
          height={560}
          alt={mainImage?.heading}
        />
      </div>
    </Container>
  );
};

export default PremiumMaterials;
