import type { FC } from 'react';
import React from 'react';

import { Button } from '@/src/shared/ui/button';
import Container from '@/src/shared/ui/containers/Container';
import { Input } from '@/src/shared/ui/input';

const LeaveRequest: FC = () => {
  return (
    <Container className="grid grid-cols-1 gap-[60px] sm:gap-[120px] md:gap-[160px]">
      <div className="flex flex-col justify-between gap-[30px] sm:gap-[60px]">
        <p className="text-[40px] leading-[48px] sm:text-[73px] sm:leading-[88px]">
          <span className="subfont text-[33px] leading-[40px] sm:text-[60px] sm:leading-[72px]">
            Оставьте заявку —{' '}
          </span>
          создайте свой уникальный стиль с LiRUMAR
        </p>
        <p className="text-[14px] leading-[19px] sm:text-[25px] sm:leading-[35px]">
          Заполните форму, и мы свяжемся с вами в течение дня
        </p>
      </div>
      <form className="flex flex-col gap-[30px]">
        <Input
          type="email"
          placeholder="Ваше имя"
          className="py-[30px] placeholder:text-[14px] placeholder:leading-[16px] sm:py-[50px] sm:placeholder:text-[25px] sm:placeholder:leading-[30px] md:py-[32px] md:placeholder:text-[16x] md:placeholder:leading-[19px]"
        />
        <Input
          type="tel"
          placeholder="+7 (999) 999-99-99"
          className="py-[30px] placeholder:text-[14px] placeholder:leading-[16px] sm:py-[50px] sm:placeholder:text-[25px] sm:placeholder:leading-[30px] md:py-[32px] md:placeholder:text-[16x] md:placeholder:leading-[19px]"
          style={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }}
        />
        <Button
          className="h-[47px] text-[14px] leading-[16px] sm:h-[120px] sm:text-[25px] sm:leading-[30px] md:h-[65px] md:text-[16px] md:leading-[20px]"
          size={'lg'}
          type="submit"
        >
          Отправить заявку
        </Button>
      </form>
    </Container>
  );
};

export default LeaveRequest;
