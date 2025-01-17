import type { FC } from 'react';
import React from 'react';

const ShoePointerPc: FC = () => {
  return (
    <svg
      width="641"
      height="611"
      viewBox="0 0 641 411"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_397_2)">
        <circle cx="32" cy="32.2319" r="32" fill="white" fillOpacity="0.07" />
        <circle
          cx="32"
          cy="32.2319"
          r="31.2"
          stroke="white"
          strokeWidth="1.6"
        />
      </g>
      <path d="M61 56L640 333.386V411" stroke="white" strokeWidth="0.8" />
      <circle cx="32.5" cy="32.5" r="12.5" fill="white" />
      <defs>
        <filter
          id="filter0_b_397_2"
          x="-6.4"
          y="-6.16807"
          width="76.8"
          height="76.8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_397_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_397_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShoePointerPc;
