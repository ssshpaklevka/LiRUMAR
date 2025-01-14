import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

const AttentionDetail: FC = () => {
  return (
    // pc:
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-full">
        <Image
          className="w-full"
          src={'/img/uniqueness/man1.png'}
          alt="man"
          width={987}
          height={1009}
        />
      </div>
      <div className="bg-foreground flex justify-center p-3">
        <div className="aspect-square w-full border border-background flex items-center justify-center flex-col gap-10">
          <Image
            src={'/img/uniqueness/snake.png'}
            alt="man"
            width={82}
            height={96}
          />
          <p className="text-black text-[33px] leading-[33px] sm:text-[59px] sm:leading-[59px] md:text-[44px] md:leading-[44px] 2xl:text-[79px] 2xl:leading-[55px] max-w-[333px] 2xl:max-w-[532px] text-center">
            безупречное внимание к деталям
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttentionDetail;
