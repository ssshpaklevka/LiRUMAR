import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

const AttentionDetail: FC = () => {
  return (
    <div className="grid grid-cols-[617px_523px] gap-5">
      <Image
        src={'/img/uniqueness/man.png'}
        alt="man"
        width={617}
        height={631}
      />
      <div className="bg-foreground max-w-[523px] px-3 py-4 flex justify-center ">
        <div className="border border-background flex items-center justify-center flex-col p-[80px] gap-10">
          <Image
            src={'/img/uniqueness/snake.png'}
            alt="man"
            width={82}
            height={96}
          />
          <p className="text-black text-[44px] leading-[44px] w-[333px] text-center">
            безупречное внимание к деталям
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttentionDetail;
