import type { FC } from 'react';
import React from 'react';

import { Button } from '../shared/ui/button';
import Container from '../shared/ui/containers/Container';

const NotFound: FC = () => {
  return (
    <Container className="h-screen flex flex-col items-center justify-center gap-[40px]">
      <div className="flex flex-col text-center">
        <h1 className="text-[217px] leading-[195px] sm:text-[390px] sm:leading-[360px] md:text-[335px] md:leading-[300px] 2xl:text-[537px] 2xl:leading-[480px]  text-[#FFFFFF] pb-[5px]">
          404
        </h1>
        <p className="text-[14px] leading-[20px] sm:text-[25px] sm:leading-[36px] md:text-[14px] md:leading-[20px] 2xl:text-[25px] 2xl:leading-[35px] text-center">
          К сожалению страница не найдена
        </p>
      </div>
      <Button className="w-[400px] md:h-[48px] h-[88px] text-[29px] leading-[44px] md:text-[16px] md:leading-[24px] 2xl:text-[25px] 2xl:leading-[37px]">
        Вернуться на главную
      </Button>
    </Container>
  );
};

export default NotFound;
