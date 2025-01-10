import type { FC } from 'react';
import React from 'react';

import CreateRequest from '@/src/features/create-request/CreateRequest.';
import HeaderText from '@/src/shared/ui/header-text/HeaderText';

const Header: FC = () => {
  return (
    <header className="flex mx-auto justify-between px-5 mt-6 max-w-[1200px]">
      <HeaderText href="/privacy" text="Каталог" />
      <HeaderText href="/" text="LiRUMAR" />
      {/* <HeaderText text="Оставить заявку" /> */}
      <CreateRequest variant="text" />
    </header>
  );
};

export default Header;
