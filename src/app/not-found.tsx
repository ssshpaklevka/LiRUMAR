import type { FC } from 'react';
import React from 'react';

import { Button } from '../shared/ui/button';

const NotFound: FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-[40px]">
      <div className="flex flex-col">
        <h1 className="text-[335px] text-[#FFFFFF] leading-[300px] pb-[5px]">
          404
        </h1>
        <p className="text-center">К сожалению страница не найдена</p>
      </div>
      <Button className="w-[360px]">Вернуться на главную</Button>
    </div>
  );
};

export default NotFound;
