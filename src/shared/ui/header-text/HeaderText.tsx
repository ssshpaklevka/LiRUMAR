import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';

type Props = {
  text: string;
  href: string;
};

const HeaderText: FC<Props> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="text-center bg-transparent text-foreground text-[14px] p-0 h-fit hover:opacity-90 hover:bg-transparent w-[115px]"
    >
      {text}
    </Link>
  );
};

export default HeaderText;
