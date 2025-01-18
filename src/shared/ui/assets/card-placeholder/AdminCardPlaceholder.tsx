import type { FC } from 'react';
import Image from 'next/image';

interface CardPlaceholderProps {
  onClick?: () => void;
  image?: string;
}

const AdminCardPlaceholder: FC<CardPlaceholderProps> = ({ image, onClick }) => {
  return image ? (
    <Image src={image} alt="product" width={68} height={68} onClick={onClick} />
  ) : (
    <button
      onClick={onClick}
      className="card-placeholder w-full h-full flex justify-center items-center bg-white/10"
    >
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          d="M14.875 53.125H53.7795L41.7647 37.1025L30.651 51.1615L23.2135 42.1728L14.875 53.125ZM0 68V0H68V68H0ZM4.25 63.75H63.75V4.25H4.25V63.75Z"
          fill="#E8E8E8"
        />
      </svg>
    </button>
  );
};

export default AdminCardPlaceholder;
