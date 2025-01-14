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
        'text-center bg-transparent text-foreground sm:text-[25px] md:text-[14px] 2xl:text-[19px] p-0 h-fit hover:opacity-90 hover:bg-transparent w-[115px]',
        className,
      )}
    >
      {text}
    </Link>
  );
};

export default HeaderText;
