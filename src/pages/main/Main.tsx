import type { FC } from 'react';

import ImagePremium from '@/src/entities/image-premium/ImagePremium';
import Categories from '@/src/widgets/categories/Categories';
import Hero from '@/src/widgets/hero/Hero';
import LeaveRequest from '@/src/widgets/leave-request/LeaveRequest';
import MassProduction from '@/src/widgets/mass-production/MassProduction';
import PremiumMaterials from '@/src/widgets/premium-materials/PremiumMaterials';
import Uniqueness from '@/src/widgets/uniqueness/Uniqueness';

const Main: FC = () => {
  return (
    <main className="flex items-center flex-col gap-[200px]">
      <Hero />
      <Categories />
      <Uniqueness />
      <PremiumMaterials imageData={ImagePremium} />
      <MassProduction />
      <LeaveRequest />
    </main>
  );
};
export default Main;
