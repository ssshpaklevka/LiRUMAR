'use client';
import Image from 'next/image';
import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import ShoePointer from '@/src/shared/ui/assets/shoe-pointer/ShoePointer';
import ShoePointerMob from '@/src/shared/ui/assets/shoe-pointer/ShoePointerMob';
import { cn } from '@/src/shared/lib/utils';
import ShoePointerBook from '@/src/shared/ui/assets/shoe-pointer/ShoePointerBook';
import ShoePointerPc from '@/src/shared/ui/assets/shoe-pointer/ShoePointerPc';

const HandMade: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePc, setIsVisiblePc] = useState(false);
  const [isVisibleTablet, setIsVisibleTablet] = useState(false);
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);

  const lineRef = useRef<HTMLDivElement>(null);
  const pcRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createObserver = (
      ref: React.RefObject<HTMLDivElement>,
      setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // Останавливаем наблюдение после появления
          }
        },
        { threshold: 0.1 }, // Срабатывает, когда 10% элемента видны
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    };

    const observerCleanup = createObserver(
      lineRef as React.RefObject<HTMLDivElement>,
      setIsVisible,
    );
    const pcObserverCleanup = createObserver(
      pcRef as React.RefObject<HTMLDivElement>,
      setIsVisiblePc,
    );
    const tabletObserverCleanup = createObserver(
      tabletRef as React.RefObject<HTMLDivElement>,
      setIsVisibleTablet,
    );
    const mobileObserverCleanup = createObserver(
      mobileRef as React.RefObject<HTMLDivElement>,
      setIsVisibleMobile,
    );

    return () => {
      observerCleanup();
      pcObserverCleanup();
      tabletObserverCleanup();
      mobileObserverCleanup();
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative w-full h-[371px] md:h-[680px] xl:h-[540px] 2xl:h-[550px] 3xl:h-[835px]">
        <Image
          className="object-cover"
          src={'/img/uniqueness/uniqueness.png'}
          alt="uniqueness"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 1160px"
        />
      </div>

      <p className="w-[300px] mt-[41px] text-[33px] leading-[29px] md:w-[502px] md:mt-[60px] md:text-[59px] md:leading-[53px] xl:w-[764px] xl:mt-[56px] xl:text-[44px] xl:leading-[39px] 3xl:w-[1184px] 3xl:mt-[80px] 3xl:text-[70px] 3xl:leading-[63px] tracking-[0.5px]">
        Ручная работа, экзотическая <br />
        <span
          className={cn(
            'subfont text-[33px] leading-[29px] md:text-[59px] md:leading-[53px] xl:text-[44px] xl:leading-[39px] 3xl:text-[80px] 3xl:leading-[72px] tracking-[0.5px]',
          )}
        >
          премиальная кожа
        </span>
      </p>

      <div
        ref={pcRef}
        className={cn(
          'hidden 3xl:block absolute right-16 transform top-[600px]',
          'fade-in',
          isVisiblePc && 'fade-in-active',
        )}
      >
        <ShoePointerPc />
        <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] xl:text-[19px] xl:leading-[29px] text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>

      {/* Блок для xl (но не 3xl) */}
      <div
        ref={tabletRef}
        className={cn(
          'hidden xl:block 3xl:hidden absolute right-16 2xl:-right-3/2 transform top-[420px]',
          'fade-in',
          isVisibleTablet && 'fade-in-active',
        )}
      >
        <ShoePointerBook />
        <p className="text-[14px] leading-[16px] sm:text-[18px] sm:leading-[25px] md:text-[16px] md:leading-[19px] xl:text-[19px] xl:leading-[29px] text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>

      {/* Блок для tablet (md) */}
      <div
        ref={lineRef}
        className={cn(
          'hidden md:block xl:hidden absolute right-16 transform top-[490px]',
          'fade-in',
          isVisible && 'fade-in-active',
        )}
      >
        <ShoePointer />
        <p className="text-[14px] leading-[16px] md:text-[25px] md:leading-[30px] text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>

      {/* Блок для mobile */}
      <div
        ref={mobileRef}
        className={cn(
          'block md:hidden absolute right-16 transform top-[260px]',
          'fade-in',
          isVisibleMobile && 'fade-in-active',
        )}
      >
        <ShoePointerMob />
        <p className="text-[14px] leading-[16px] text-end underline underline-offset-8">
          Кожа питона
        </p>
      </div>
    </div>
  );
};

export default HandMade;
