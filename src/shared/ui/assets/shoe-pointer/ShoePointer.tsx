import type { FC } from 'react';
import React from 'react';

interface Props {
  className?: string;
}

const ShoePointer: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="401"
      height="299"
      viewBox="0 0 401 299"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_157_2)">
        <circle cx="20" cy="20.645" r="20" fill="white" fillOpacity="0.07" />
        <circle cx="20" cy="20.645" r="19.5" stroke="white" />
      </g>
      <path
        d="M38 35.645L400 241.145V298.645"
        stroke="white"
        strokeWidth="0.5"
      />
      <circle cx="20" cy="20.645" r="8" fill="white" />
      <defs>
        <filter
          id="filter0_b_157_2"
          x="-4"
          y="-3.35498"
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
            result="effect1_backgroundBlur_157_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_157_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ShoePointer;
