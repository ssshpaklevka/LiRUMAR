import type { FC } from 'react';
import React from 'react';

import CreateRequest from '@/src/features/create-request/CreateRequest.';
import HeaderText from '@/src/shared/ui/header-text/HeaderText';

const Header: FC = () => {
  return (
    <header className="relative flex flex-row-reverse md:flex-row mx-auto z-50 justify-between px-5 mt-6">
      <HeaderText
        className="sssm:text-right text-center md:text-left"
        href="/catalog"
        text="Каталог"
      />
      <HeaderText
        href="/"
        text="LiRUMAR"
        className="sssm:text-left md:text-center"
      />
      {/* <HeaderText text="Оставить заявку" /> */}
      <CreateRequest className="hidden md:block" variant="text" />
    </header>
  );
};

export default Header;
