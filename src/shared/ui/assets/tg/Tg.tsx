import type { FC } from 'react';
import React from 'react';

interface Props {
  color?: 'black' | 'white';
}

const Tg: FC<Props> = ({ color = 'black' }) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.88588 9.21289L5.63775 12.8425C5.99276 12.8425 6.14651 12.6839 6.33089 12.4934L7.9953 10.8392L11.4441 13.4658C12.0767 13.8324 12.5223 13.6394 12.6929 12.8607L14.9567 1.82893L14.9573 1.82828C15.158 0.855882 14.6192 0.475634 14.0029 0.714183L0.696378 6.01231C-0.211769 6.3789 -0.198019 6.9054 0.541999 7.14395L3.94396 8.24439L11.846 3.10227C12.2179 2.84617 12.556 2.98787 12.2779 3.24397L5.88588 9.21289Z"
        fill={color}
      />
    </svg>
  );
};

export default Tg;
