import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

const YourStatus: FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex items-center flex-col pt-[96px] gap-24">
        <p className="text-[48px] leading-[52px]">
          <span className="subfont text-[44px] leading-[48px]">
            -уникальность, <br />
          </span>
          которая подчеркивает ваш статус
        </p>
        <Image
          src={'/img/uniqueness/sneakers.png'}
          width={311}
          height={357}
          alt="sneakers"
        />
      </div>
      <div>
        <Image
          src={'/img/uniqueness/shoes.png'}
          width={365}
          height={417}
          alt="shoes"
        />
      </div>
    </div>
  );
};

export default YourStatus;
