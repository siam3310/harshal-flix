import Image from 'next/image';
import React from 'react';

interface CardProps {
  photo: string;
  title: string;
  size: string;
  downloadLinks: string[];
  watchLinks: string[];
  key: number;
  index: number;
}

const Card: React.FC<CardProps> = ({
  photo,
  title,
  size,
  downloadLinks,
  watchLinks,
  key,
  index
}) => {
  return (
    <div
      className="mx-auto flex w-0 flex-col overflow-hidden rounded-xl bg-[#121212] opacity-100 shadow-md border-2 border-[#00FE94]"
      key={key}
      style={{ animationDelay: `${Math.min(index * 200, 1500)}ms` }}
    >
      <Image
        src={photo}
        alt={title + ' image'}
        loading="lazy"
        className="h-72 w-full cursor-pointer select-none object-cover"
        height={288}
        width={224}
      />
      <div className="mx-3 mt-3 flex grow flex-col">
        <h6 className="relative cursor-default text-2xl md:text-xl lg:text-lg text-white font-bold">
          {title}
        </h6>
        <span className="text relative mb-3 mt-auto cursor-default lg:text-sm text-[#D1D5DB]">
          Size: {size}
        </span>

        {downloadLinks &&
          downloadLinks.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="relative mx-auto my-5 w-fit cursor-pointer select-none px-6 py-3 text-center font-bold text-[#00FE94] border-[3px] border-[#00FE94] rounded-lg"
            >
              Download {index + 1}
            </a>
          ))}

        {watchLinks &&
          watchLinks.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="relative mx-auto my-5 w-fit cursor-pointer select-none px-6 py-3 text-center font-bold text-[#00FE94] border-[3px] border-[#00FE94] rounded-lg"
            >
              Watch {index + 1}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Card;
