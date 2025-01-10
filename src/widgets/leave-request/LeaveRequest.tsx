import type { FC } from 'react';
import React from 'react';

import { Button } from '@/src/shared/ui/button';
import Container from '@/src/shared/ui/containers/Container';
import { Input } from '@/src/shared/ui/input';

const LeaveRequest: FC = () => {
  return (
    <Container className="grid grid-cols-2 gap-[160px]">
      <div className="flex flex-col justify-between">
        <p className="text-[33px] leading-[39px]">
          <span className="subfont text-[40px] leading-[48px]">
            Оставьте заявку —{' '}
          </span>
          создайте свой уникальный стиль с LiRUMAR
        </p>
        <p className="leading-[19px]">
          Заполните форму, и мы свяжемся с вами в течение дня
        </p>
      </div>
      <form className="flex flex-col gap-[30px]">
        <Input type="email" placeholder="Ваше имя" className="py-8" />
        <Input
          type="tel"
          placeholder="+7 (999) 999-99-99"
          className="py-8"
          style={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }}
        />
        <Button size={'lg'} type="submit">
          Отправить
        </Button>
      </form>
    </Container>
  );
};

export default LeaveRequest;
