/* eslint-disable indent */
'use client';
/* eslint-disable no-console */
/* eslint-disable no-undef */
import process from 'process';

import Link from 'next/link';
import type { FC } from 'react';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { Button } from '@/src/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/shared/ui/dialog';
import { Input } from '@/src/shared/ui/input';
import { cn } from '@/src/shared/lib/utils';
import type { Product } from '@/src/entities/product/product.interface';

interface Props {
  variant: 'big' | 'text' | 'regular' | 'buy';
  className?: string;
  product?: Product;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const CreateRequest: FC<Props> = ({ variant, className, product }) => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);

  // Используем react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleOpenFirstDialog = () => {
    setIsFirstDialogOpen(true);
  };

  const handleCloseFirstDialog = () => {
    setIsFirstDialogOpen(false);
    reset(); // Сбросить данные формы при закрытии
  };

  const handleOpenSecondDialog = () => {
    setIsFirstDialogOpen(false);
    setIsSecondDialogOpen(true);
  };

  const handleCloseSecondDialog = () => {
    setIsSecondDialogOpen(false);
  };

  // Обработчик отправки формы
  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const payload = product
      ? {
          ...data,
          link: `${process.env.NEXT_PUBLIC_CLIENT_URL}${product.id}`,
          nameProd: product.name,
          descriptionProd: product.description,
          allDescriptionProd: product.full_description,
          priceProd: product.price,
        }
      : {
          ...data,
        };

    console.log(payload);

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        handleOpenSecondDialog();
      } else {
        alert('Ошибка отправки заказа.');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      alert('Ошибка при отправке заказа.');
    }

    reset(); // Очистить форму после отправки
  };

  return (
    <div className={className}>
      <Dialog open={isFirstDialogOpen} onOpenChange={setIsFirstDialogOpen}>
        <DialogTrigger asChild>
          {variant === 'big' ? (
            <Button
              onClick={handleOpenFirstDialog}
              size={'xl'}
              className={cn('w-full', className)}
            >
              Заказать
            </Button>
          ) : variant === 'text' ? (
            <Button
              onClick={handleOpenFirstDialog}
              className="bg-transparent text-foreground text-[14px] 2xl:text-[19px] p-0 h-fit hover:opacity-90 hover:bg-transparent"
            >
              Оставить заявку
            </Button>
          ) : variant === 'regular' ? (
            <Button
              onClick={handleOpenFirstDialog}
              size={'sm'}
              className={cn('w-[260px]', className)}
            >
              Оставить заявку
            </Button>
          ) : variant === 'buy' ? (
            <Button
              onClick={handleOpenFirstDialog}
              size={'sm'}
              className={cn('w-full', className)}
            >
              Оставить заявку
            </Button>
          ) : null}
        </DialogTrigger>
        <DialogContent className="bg-foreground">
          <DialogHeader>
            <DialogTitle className="text-[33px] leading-[33px] font-normal text-background text-center mb-[10px]">
              Оставьте заявку
            </DialogTitle>
            <DialogDescription className="text-[16px] leading-[24px] text-background text-center">
              Заполните поля, после чего с вами свяжется менеджер
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[33px]"
          >
            <div className="flex flex-col gap-[33px]">
              <div>
                <Input
                  placeholder="Имя"
                  className="border py-6 text-black focus-visible:border-2 focus-visible:border-background"
                  {...register('name', { required: 'Введите ваше имя' })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Номер телефона"
                  className="border py-6 text-black focus-visible:border-2 focus-visible:border-background"
                  {...register('phone', {
                    required: 'Введите номер телефона',
                    pattern: {
                      value: /^[0-9+\-()\s]+$/,
                      message: 'Введите корректный номер телефона',
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Электронная почта"
                  className="border py-6 text-black focus-visible:border-2 focus-visible:border-background"
                  {...register('email', {
                    required: 'Введите ваш email',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Введите корректный email',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <DialogFooter className="flex items-center justify-center">
              <Button variant={'destructive'} type="submit">
                Отправить
              </Button>
            </DialogFooter>
          </form>
          <p className="text-center text-[12px] leading-[18px] text-background opacity-[60%]">
            Нажимая кнопку «Отправить» вы соглашаетесь с{' '}
            <Link href={'/privacy'} onClick={handleCloseFirstDialog}>
              пользовательским соглашением, политикой конфиденциальности
            </Link>
          </p>
        </DialogContent>
      </Dialog>

      <Dialog open={isSecondDialogOpen} onOpenChange={setIsSecondDialogOpen}>
        <DialogContent
          className="bg-cover bg-opacity-[6%]"
          style={{ backgroundImage: 'url("/img/request/frame.webp")' }}
        >
          <div className="border border-white p-20">
            <DialogHeader>
              <DialogTitle className="text-white leading-[33px] font-normal text-[33px] text-center mb-[10px]">
                Спасибо за заказ!
              </DialogTitle>
              <DialogDescription className="text-white leading-[19.2px] text-[16px] text-center">
                В скором времени с вами свяжется менеджер
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex items-center justify-center pt-10">
              <Button
                className="w-full"
                type="button"
                onClick={handleCloseSecondDialog}
              >
                Закрыть окно
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateRequest;
