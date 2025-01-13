import type { FC } from 'react';
import React from 'react';

import CreateRequest from '@/src/features/create-request/CreateRequest.';
import HeaderText from '@/src/shared/ui/header-text/HeaderText';

const Header: FC = () => {
  return (
    <header className="flex flex-row-reverse  md:flex-row mx-auto justify-between px-5 mt-6 max-w-[1200px]">
      <HeaderText
        className="text-center md:text-left"
        href="/catalog"
        text="Каталог"
      />
      <HeaderText href="/" text="LiRUMAR" />
      {/* <HeaderText text="Оставить заявку" /> */}
      <CreateRequest className="hidden md:block" variant="text" />
    </header>
  );
};

export default Header;
