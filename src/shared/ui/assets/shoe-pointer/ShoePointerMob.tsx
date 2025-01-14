import type { FC } from 'react';
import React from 'react';

const ShoePointerMob: FC = () => {
  return (
    <svg
      width="139"
      height="249"
      viewBox="0 0 139 249"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_186_3)">
        <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.07" />
        <circle cx="20" cy="20" r="19.5" stroke="white" />
      </g>
      <circle cx="20" cy="20" r="8" fill="white" />
      <path d="M29 37L138.5 212.5V248.5" stroke="white" strokeWidth="0.5" />
      <defs>
        <filter
          id="filter0_b_186_3"
          x="-4"
          y="-4"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_186_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_186_3"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShoePointerMob;
