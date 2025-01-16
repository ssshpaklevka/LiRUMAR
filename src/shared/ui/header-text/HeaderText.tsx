import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';

import { cn } from '../../lib/utils';

type Props = {
  text: string;
  className?: string;
  href: string;
};

const HeaderText: FC<Props> = ({ text, className, href }) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-center bg-transparent text-foreground text-[14px] leading-[12px] md:text-[25px] md:leading-[22px] xl:text-[19px] xl:leading-[16px] 3xl:text-[19px] 3xl:leading-[16px] p-0 h-fit hover:opacity-90 hover:bg-transparent w-[115px]',
        className,
      )}
    >
      {text}
    </Link>
  );
};

export default HeaderText;
