import React from 'react';

const SkeletonProduct: React.FC = () => {
  return (
    <div className="flex flex-col gap-[10px] md:gap-[15px] xl:gap-[20px] h-full">
      <div className="overflow-hidden relative w-full aspect-square bg-[#2E2E2E] animate-pulse"></div>
      <div className="flex flex-col gap-[5px] md:gap-[10px] xl:gap-[12px] 3xl:gap-[16px] min-h-[80px] md:min-h-[100px]">
        <div className="h-8 bg-[#2E2E2E] rounded animate-pulse"></div>
        <div className="h-8 bg-[#2E2E2E] rounded animate-pulse w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
