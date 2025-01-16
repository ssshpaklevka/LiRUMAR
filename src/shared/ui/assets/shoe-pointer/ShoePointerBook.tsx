import type { FC } from 'react';
import React from 'react';

const ShoePointerBook: FC = () => {
  return (
    <svg
      width="415"
      height="309"
      viewBox="0 0 415 309"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_422_4)">
        <circle
          cx="21.5817"
          cy="21.4421"
          r="20.6628"
          fill="white"
          fillOpacity="0.07"
        />
        <circle
          cx="21.5817"
          cy="21.4421"
          r="20.1462"
          stroke="white"
          strokeWidth="1.03314"
        />
      </g>
      <path
        d="M40.1777 36.9395L414.174 249.249V308.655"
        stroke="white"
        strokeWidth="0.516569"
      />
      <circle cx="21.5815" cy="21.4424" r="8.26511" fill="white" />
      <defs>
        <filter
          id="filter0_b_422_4"
          x="-3.21361"
          y="-3.35326"
          width="49.5903"
          height="49.5908"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.06628" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_422_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_422_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShoePointerBook;
