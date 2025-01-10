import type { CSSProperties, FC, ReactNode } from 'react';
import React from 'react';

import { cn } from '../../lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Container: FC<Props> = ({ children, className, style }) => {
  return (
    <section
      className={cn('max-w-[1200px] px-5 w-full', className)}
      style={style}
    >
      {children}
    </section>
  );
};

export default Container;
