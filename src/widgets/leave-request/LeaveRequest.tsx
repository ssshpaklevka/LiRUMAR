'use client';
/* eslint-disable no-console */
/* eslint-disable no-undef */
import type { FC } from 'react';
import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { Button } from '@/src/shared/ui/button';
import Container from '@/src/shared/ui/containers/Container';
import { Input } from '@/src/shared/ui/input';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const LeaveRequest: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        alert('Ошибка отправки заказа.');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      alert('Ошибка при отправке заказа.');
    }

    reset(); // Очистить форму после отправки
  };

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-[60px] sm:gap-[120px] md:gap-[160px]">
      <div className="flex flex-col justify-between gap-[30px] sm:gap-[60px] md:gap-[100px] 2xl:gap-[175px]">
        <p className="text-[33px] leading-[40px] sm:text-[60px] sm:leading-[72px] md:text-[33px] md:leading-[40px] 2xl:text-[49px] 2xl:leading-[59px]">
          <span className="subfont text-[40px] leading-[48px] sm:text-[73px] sm:leading-[88px] md:text-[40px] md:leading-[48px] 2xl:text-[58px] 2xl:leading-[70px]">
            Оставьте заявку —{' '}
          </span>
          создайте свой уникальный стиль с LiRUMAR
        </p>
        <p className="w-[240px] sm:w-[440px] md:w-full text-[14px] leading-[19px] sm:text-[25px] sm:leading-[35px] md:text-[16px] md:leading-[19px] 2xl:text-[25px] 2xl:leading-[30px]">
          Заполните форму, и мы свяжемся с вами в течение дня
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[30px] 2xl:gap-[50px]"
      >
        <Input
          placeholder="Ваше имя"
          className="py-[30px] text-[14px] leading-[16px] placeholder:text-[14px] placeholder:leading-[16px] sm:py-[50px] sm:text-[25px] sm:leading-[30px] sm:placeholder:text-[25px] sm:placeholder:leading-[30px] md:py-[32px] md:text-[16px] md:leading-[19px] md:placeholder:text-[16px] md:placeholder:leading-[19px] 2xl:py-[52px] 2xl:text-[25px] 2xl:leading-[30px] 2xl:placeholder:text-[25px] 2xl:placeholder:leading-[30px]"
          {...register('name', { required: 'Введите ваше имя' })}
        />
        <Input
          placeholder="+7 (999) 999-99-99"
          className="py-[30px] text-[14px] leading-[16px] placeholder:text-[14px] placeholder:leading-[16px] sm:py-[50px] sm:text-[25px] sm:leading-[30px] sm:placeholder:text-[25px] sm:placeholder:leading-[30px] md:py-[32px] md:text-[16px] md:leading-[19px] md:placeholder:text-[16px] md:placeholder:leading-[19px] 2xl:py-[52px] 2xl:text-[25px] 2xl:leading-[30px] 2xl:placeholder:text-[25px] 2xl:placeholder:leading-[30px]"
          {...register('phone', {
            required: 'Введите номер телефона',
            pattern: {
              value: /^[0-9+\-()\s]+$/,
              message: 'Введите корректный номер телефона',
            },
          })}
          style={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }}
        />
        <Button
          className="h-[65px] text-[14px] leading-[16px] sm:h-[120px] sm:text-[25px] sm:leading-[30px] md:h-[65px] md:text-[16px] md:leading-[20px] 2xl:h-[104px] 2xl:text-[25px] 2xl:leading-[30px]"
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
