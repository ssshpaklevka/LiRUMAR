import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

const ShoePointerPc: FC = () => {
  return (
    <div className="absolute 3xl:top-0 3xl:-left-3 2xl:-left-3 2xl:-top-1 xl:-left-[20px] xl:-top-3  lg:-left-[30px] lg:-top-1 md:-left-[30px] md:-top-1 sm:-left-[10px] sm:-top-0 md:size-[64px] top-[0px] -left-[10px] size-[32px]">
      <Image
        src={'/img/uniqueness/pointer.svg'}
        alt="arrow"
        width={64}
        height={64}
      />
    </div>
  );
};

export default ShoePointerPc;
