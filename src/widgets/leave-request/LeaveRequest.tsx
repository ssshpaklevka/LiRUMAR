'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */

import type { FC } from 'react';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { Button } from '@/src/shared/ui/button';
import Container from '@/src/shared/ui/containers/Container';
import { Input } from '@/src/shared/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/src/shared/ui/dialog';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const LeaveRequest: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);

  const handleCloseSecondDialog = () => {
    setIsSecondDialogOpen(false);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // анимация произойдет только один раз
    amount: 0.2, // триггер когда 30% элемента видно
    margin: '0px 0px -100px 0px', // отступ для триггера
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

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
        return;
      }

      setIsSecondDialogOpen(true);

      reset();
    } catch (error) {
      alert('Ошибка при отправке заказа.');
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <Container>
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px] sm:gap-[120px] md:gap-[160px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col justify-between gap-[30px] sm:gap-[60px] md:gap-[100px] 2xl:gap-[175px]"
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              className="text-[33px] leading-[40px] sm:text-[60px] sm:leading-[72px] md:text-[33px] md:leading-[40px] 2xl:text-[49px] 2xl:leading-[59px]"
            >
              <span className="subfont text-[40px] leading-[48px] sm:text-[73px] sm:leading-[88px] md:text-[40px] md:leading-[48px] 2xl:text-[58px] 2xl:leading-[70px]">
                Оставьте заявку —{' '}
              </span>
              создайте свой уникальный стиль с LiRUMAR
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="w-[240px] sm:w-[440px] md:w-full text-[14px] leading-[19px] sm:text-[25px] sm:leading-[35px] md:text-[16px] md:leading-[19px] 2xl:text-[25px] 2xl:leading-[30px]"
            >
              Заполните форму, и мы свяжемся с вами в течение дня
            </motion.p>
          </motion.div>

          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[30px] 2xl:gap-[50px]"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                placeholder="Ваше имя"
                className="py-[30px] text-[14px] leading-[16px] placeholder:text-[14px] placeholder:leading-[16px] sm:py-[50px] sm:text-[25px] sm:leading-[30px] sm:placeholder:text-[25px] sm:placeholder:leading-[30px] md:py-[32px] md:text-[16px] md:leading-[19px] md:placeholder:text-[16px] md:placeholder:leading-[19px] 2xl:py-[52px] 2xl:text-[25px] 2xl:leading-[30px] 2xl:placeholder:text-[25px] 2xl:placeholder:leading-[30px]"
                {...register('name', { required: 'Введите ваше имя' })}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                placeholder="+7 (999) 999-99-99"
                className="py-[30px] text-[14px] leading-[16px] placeholder:text-[14px] placeholder:leading-[16px] sm:py-[50px] sm:text-[25px] sm:leading-[30px] sm:placeholder:text-[25px] sm:placeholder:leading-[30px] md:py-[32px] md:text-[16px] md:leading-[19px] md:placeholder:text-[16px] md:placeholder:leading-[19px] 2xl:py-[52px] 2xl:text-[25px] 2xl:leading-[30px] 2xl:placeholder:text-[25px] 2xl:placeholder:leading-[30px]"
                {...register('phone', {
                  required: 'Введите номер телефона',
                  pattern: {
                    value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                    message: 'Введите корректный номер телефона',
                  },
                  onChange: (e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length > 0) {
                      value =
                        '+7 (' +
                        value.substring(1, 4) +
                        (value.length > 4 ? ') ' + value.substring(4, 7) : '') +
                        (value.length > 7 ? '-' + value.substring(7, 9) : '') +
                        (value.length > 9 ? '-' + value.substring(9, 11) : '');
                    }
                    e.target.value = value;
                  },
                })}
                style={{
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                }}
              />
            </motion.div>

            <Button
              className="transition-all duration-300 ease-in-out hover:bg-transparent hover:text-foreground hover:border hover:border-[#D9D9D9] border-[#D9D9D9] h-[65px] text-[14px] leading-[16px] sm:h-[120px] sm:text-[25px] sm:leading-[30px] md:h-[65px] md:text-[16px] md:leading-[20px] 2xl:h-[104px] 2xl:text-[25px] 2xl:leading-[30px]"
              size={'lg'}
              type="submit"
            >
              Отправить заявку
            </Button>
          </motion.form>
        </motion.div>
      </Container>

      {/* Диалоговое окно */}
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
                className="transition-all duration-300 ease-in-out w-full hover:bg-transparent hover:text-foreground hover:border-[#D9D9D9] border"
                type="button"
                onClick={handleCloseSecondDialog}
              >
                Закрыть окно
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default LeaveRequest;
