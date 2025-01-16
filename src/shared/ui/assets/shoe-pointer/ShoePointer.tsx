import type { FC } from 'react';
import React from 'react';

const ShoePointer: FC = () => {
  return (
    <svg
      width="255"
      height="456"
      viewBox="0 0 255 456"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_422_3)">
        <circle
          cx="37.0278"
          cy="36.8027"
          r="36.6489"
          fill="white"
          fillOpacity="0.07"
        />
        <circle
          cx="37.0278"
          cy="36.8027"
          r="35.7327"
          stroke="white"
          strokeWidth="1.83244"
        />
      </g>
      <circle cx="37.0277" cy="36.8031" r="14.6596" fill="white" />
      <path
        d="M53.5198 67.9546L254.172 389.549V455.516"
        stroke="white"
        strokeWidth="0.916222"
      />
      <defs>
        <filter
          id="filter0_b_422_3"
          x="-6.95087"
          y="-7.17597"
          width="87.9573"
          height="87.9574"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.66489" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_422_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_422_3"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShoePointer;
