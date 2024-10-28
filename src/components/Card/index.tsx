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
      className='mx-auto flex w-0 animate-[card-grow_300ms_ease_0s_1_normal_forwards] flex-col overflow-hidden rounded-xl bg-red-100  opacity-0  !shadow-red-300 ring-2 ring-red-300 ring-offset-2 transition-all
    hover:shadow-[0.9em_0.9em_0em] active:!shadow-red-400'
      key={key}
      style={{ animationDelay: `${Math.min(index * 200, 1500)}ms` }}>
      <Image
        src={photo}
        alt={title + ' image'}
        loading='lazy'
        className='h-72 w-full cursor-pointer select-none object-cover'
        height={288}
        width={224}
      />
      <div className='mx-3 mt-3 flex grow flex-col  '>
        <h6 className='relative cursor-default text-2xl md:text-xl lg:text-lg '>
          {title}
        </h6>
        <span className='text relative mb-3 mt-auto cursor-default lg:text-sm'>
          Size : {size}
        </span>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='group relative mx-auto my-5 w-fit cursor-pointer select-none px-6 py-3 text-center font-bold text-red-600 transition-all active:translate-x-1 active:translate-y-1 active:text-red-900'>
          <span
            className=' absolute inset-0 size-full -translate-x-2 translate-y-2 rounded-xl bg-red-300 transition duration-300  ease-out group-hover:translate-x-2 group-hover:translate-y-2 
                 group-active:translate-x-0 group-active:translate-y-0'></span>
          <span className='absolute inset-0 size-full rounded-xl border-[3px] border-red-800'></span>
          <span className='relative '>Download</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
