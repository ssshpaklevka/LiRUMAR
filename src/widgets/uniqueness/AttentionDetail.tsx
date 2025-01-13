import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

const AttentionDetail: FC = () => {
  return (
    <div className="flex  justify-between gap-5">
      <div className="h-[631px]">
        <Image
          src={'/img/uniqueness/man.png'}
          alt="man"
          width={617}
          height={631}
        />
      </div>
      <div className="bg-foreground  px-3 py-4 flex justify-center ">
        <div className="border border-background flex items-center justify-center flex-col p-[80px] gap-10">
          <Image
            src={'/img/uniqueness/snake.png'}
            alt="man"
            width={82}
            height={96}
          />
          <p className="text-black text-[44px] leading-[45px] w-[333px] text-center">
            безупречное внимание к деталям
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttentionDetail;
