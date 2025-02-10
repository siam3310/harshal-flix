import Image from 'next/image';
import React from 'react';

interface CardProps {
  photo: string;
  title: string;
  size: string;
  url: string;
  key: number;
  index: number;
}

const Card: React.FC<CardProps> = ({ photo, title, size, url, key, index }) => {
  return (
    <div
      className='mx-auto flex w-full flex-col overflow-hidden rounded-xl bg-[#121212] text-[#D1D5DB] border-2 border-[#00FE94] p-5 shadow-md'>
      <Image
        src={photo}
        alt={title + ' image'}
        loading='lazy'
        className='h-72 w-full object-cover'
        height={288}
        width={224}
      />
      <div className='mt-3 flex flex-col'>
        <h6 className='font-bold text-xl'>{title}</h6>
        <span className='text-sm mb-3 mt-auto'>Size: {size}</span>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='mx-auto mt-5 w-fit px-6 py-3 text-center font-bold text-[#00FE94] border-2 border-[#00FE94] rounded-lg'>
          Download
        </a>
      </div>
    </div>
  );
};

export default Card;
