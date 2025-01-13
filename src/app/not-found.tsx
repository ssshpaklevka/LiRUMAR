import type { FC } from 'react';
import React from 'react';

import { Button } from '../shared/ui/button';
import Container from '../shared/ui/containers/Container';

const NotFound: FC = () => {
  return (
    <Container className="h-screen flex flex-col items-center justify-center gap-[40px]">
      <div className="flex flex-col">
        <h1 className="text-[360px] leading-[360px] md:text-[335px] md:leading-[300px]  text-[#FFFFFF] pb-[5px]">
          404
        </h1>
        <p className="text-[25px] leading-[36px] md:text-[16px] md:leading-[19px] text-center">
          К сожалению страница не найдена
        </p>
      </div>
      <Button className="w-full md:h-[48px] h-[88px] text-[29px] leading-[44px] md:text-[16px] md:leading-[24px]">
        Вернуться на главную
      </Button>
    </Container>
  );
};

export default NotFound;
