import type { FC } from 'react';
import React from 'react';

import { Button } from '@/src/shared/ui/button';
import Container from '@/src/shared/ui/containers/Container';

const MassProduction: FC = () => {
  return (
    <Container
      className="h-[642px] w-full bg-cover flex flex-col items-center justify-center gap-[62px]"
      style={{ backgroundImage: 'url("/img/mass-production/frame.png")' }}
    >
      <div className="flex flex-col items-center gap-[35px]">
        <p className="text-[44px] w-[600] text-center leading-[52px]">
          Нашим изделиям нет места в массовом производстве
        </p>
        <p className="w-[470px] text-center leading-[19px]">
          Каждая единица изготавливается в ручную, индивидуально под каждого
          клиента
        </p>
      </div>
      <Button size={'lg'} className="w-[360px]">
        Смотреть каталог
      </Button>
    </Container>
  );
};

export default MassProduction;
