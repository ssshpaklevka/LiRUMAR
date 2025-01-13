import { Suspense, type FC } from 'react';

import Catalog from '@/src/pages/catalog/Catalog';

const Page: FC = () => {
  return (
    <Suspense>
      <Catalog />
    </Suspense>
  );
};

export default Page;
