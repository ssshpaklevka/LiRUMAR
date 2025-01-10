'use client';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useState } from 'react';

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

interface Props {
  variant: 'big' | 'text' | 'regular';
}

const CreateRequest: FC<Props> = ({ variant }) => {
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);

  const handleOpenFirstDialog = () => {
    setIsFirstDialogOpen(true);
  };

  const handleCloseFirstDialog = () => {
    setIsFirstDialogOpen(false);
  };

  const handleOpenSecondDialog = () => {
    setIsFirstDialogOpen(false);
    setIsSecondDialogOpen(true);
  };

  const handleCloseSecondDialog = () => {
    setIsSecondDialogOpen(false);
  };
  return (
    <>
      <Dialog open={isFirstDialogOpen} onOpenChange={setIsFirstDialogOpen}>
        <DialogTrigger asChild>
          {variant === 'big' ? (
            <Button
              onClick={handleOpenFirstDialog}
              size={'xl'}
              className="w-[260px]"
            >
              Заказать
            </Button>
          ) : variant === 'text' ? (
            <Button
              onClick={handleOpenFirstDialog}
              className="bg-transparent text-foreground text-[14px] p-0 h-fit hover:opacity-90 hover:bg-transparent"
            >
              Оставить заявку
            </Button>
          ) : variant === 'regular' ? (
            <Button
              onClick={handleOpenFirstDialog}
              size={'sm'}
              className="w-[260px]"
            >
              Оставить заявку
            </Button>
          ) : null}
        </DialogTrigger>
        <DialogContent className="bg-foreground">
          <DialogHeader>
            <DialogTitle className="text-[33px] text-background text-center mb-[10px]">
              Оставьте заявку
            </DialogTitle>
            <DialogDescription className="text-[16px] text-background text-center">
              Заполните поля, после чего с вами свяжется менеджер
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-[33px]">
            <Input
              placeholder="Имя"
              className="border focus-visible:border-2 focus-visible:border-background"
            />
            <Input
              placeholder="Номер телефона"
              className="border focus-visible:border-2 focus-visible:border-background"
            />
            <Input
              placeholder="Электронная почта"
              className="border focus-visible:border-2 focus-visible:border-background"
            />
          </div>
          <DialogFooter className="flex items-center justify-center">
            <Button
              variant={'destructive'}
              type="submit"
              onClick={handleOpenSecondDialog}
            >
              Отправить
            </Button>
          </DialogFooter>
          <p className="text-center text-[12px] text-background opacity-[60%]">
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
          style={{ backgroundImage: 'url("/img/request/frame.png")' }}
        >
          <div className="border border-white p-20">
            <DialogHeader>
              <DialogTitle className="text-white text-[33px] text-center mb-[10px]">
                Спасибо за заказ!
              </DialogTitle>
              <DialogDescription className="text-white text-[16px] text-center">
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
    </>
  );
};

export default CreateRequest;
