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
    <main className="flex flex-col">
      <Hero />
      <div className="px-5 flex items-center flex-col gap-[200px]">
        <Categories />
        <Uniqueness />
        <PremiumMaterials imageData={ImagePremium} />
        <MassProduction />
        <LeaveRequest />
      </div>
    </main>
  );
};
export default Main;
