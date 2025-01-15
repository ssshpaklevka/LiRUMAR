import type { FC } from 'react';
import React from 'react';

import { Button } from '@/src/shared/ui/button';

const MassProduction: FC = () => {
  return (
    <div className="px-0 w-full">
      <div className="hidden lg:block lg:px-0">
        <div
          className="h-[642px] w-full bg-cover flex flex-col items-center justify-center gap-[62px]"
          style={{ backgroundImage: 'url("/img/mass-production/frame.webp")' }}
        >
          <div className="flex flex-col items-center gap-[35px]">
            <p className="text-[44px] w-[600] text-center leading-[52px] 2xl:text-[79px] 2xl:leading-[95px]">
              Нашим изделиям нет места в массовом производстве
            </p>
            <p className="w-[470px] text-center leading-[19px] 2xl:text-[25px] 2xl:leading-[30px]">
              Каждая единица изготавливается в ручную, индивидуально под каждого
              клиента
            </p>
          </div>
          <Button
            size={'lg'}
            className="w-[360px] 2xl:w-[576px] 2xl:h-[104px] 2xl:text-[25px] 2xl:leading-[30px]"
          >
            Смотреть каталог
          </Button>
        </div>
      </div>

      <div className="block lg:hidden lg:px-0">
        <div
          className="h-[642px] sm:h-[1176px] w-full bg-cover flex flex-col items-center justify-center gap-[62px]"
          style={{
            backgroundImage: 'url("/img/mass-production/frameph.webp")',
          }}
        >
          <div className="flex flex-col items-center gap-[35px]">
            <p className="text-[33px] leading-[40px] w-[330] sm:text-[59px] sm:leading-[70px] sm:w-[620px] text-center">
              Нашим изделиям нет места в массовом производстве
            </p>
            <p className="text-[14px] leading-[16px] sm:text-[25px] sm:leading-[30px] sm:max-w-[590px] text-center">
              Каждая единица изготавливается в ручную, индивидуально под каждого
              клиента
            </p>
          </div>
          <Button
            size={'lg'}
            className="w-[236px] h-[65px] text-[14px] leading-[16px] sm:w-[432px] sm:h-[120px] sm:text-[25px] sm:leading-[30px]"
          >
            Смотреть каталог
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MassProduction;
