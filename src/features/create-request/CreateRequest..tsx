/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
'use client';

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
    reset();
  };

  const handleOpenSecondDialog = () => {
    setIsFirstDialogOpen(false);
    setIsSecondDialogOpen(true);
  };

  const handleCloseSecondDialog = () => {
    setIsSecondDialogOpen(false);
  };

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
      alert('Ошибка при отправке заказа.');
    }

    reset();
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
              className="bg-transparent text-foreground text-[14px] leading-[12px] md:text-[25px] md:leading-[22px] xl:text-[19px] xl:leading-[16px] 3xl:text-[19px] 3xl:leading-[16px] p-0 h-fit hover:opacity-90 hover:bg-transparent"
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
            <DialogTitle className="text-[25px] leading-[25px] sm:text-[44px] sm:leading-[44px] md:text-[33px] md:leading-[33px] xl:text-[44px] xl:leading-[44px] font-normal text-background text-center mb-[10px]">
              Оставьте заявку
            </DialogTitle>
            <DialogDescription className="text-[14px] leading-[21px] sm:text-[25px] sm:leading-[37px] md:text-[16px] md:leading-[24px] xl:text-[25px] xl:leading-[37px] text-background text-center">
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
              <Button
                variant={'destructive'}
                type="submit"
                className="transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black hover:border-black border"
              >
                Отправить
              </Button>
            </DialogFooter>
          </form>
          <p className="text-center text-[10px] leading-[15px] sm:text-[19px] sm:leading-[29px] md:text-[12px] md:leading-[18px] xl:text-[19px] xl:leading-[28px] text-background opacity-[60%]">
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
              <DialogTitle className="text-white text-[25px] leading-[25px] sm:text-[33px] sm:leading-[33px] md:text-[33px] md:leading-[33px] xl:text-[32px] xl:leading-[34px] font-normal text-center mb-[10px]">
                Спасибо за заказ!
              </DialogTitle>
              <DialogDescription className="text-white text-[14px] leading-[16px] sm:text-[20px] sm:leading-[25px] md:text-[16px] md:leading-[19px] xl:text-[22px] xl:leading-[28px] text-center">
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
