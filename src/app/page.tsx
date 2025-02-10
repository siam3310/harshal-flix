'use client';
import Data from '@/components/api';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { ChangeEvent, useMemo, useState } from 'react';

export interface Movie {
  photo: string;
  title: string;
  size: string;
  url: string;
  category: string;
}

const Page: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(Data);
  const [inputValue, setInputValue] = useState('');
  const uniqueCategories = useMemo(
    () => [...new Set(Data.map((movie) => movie.category)), 'All'],
    []
  );

  const filterByCategory = (category: string) => {
    if (category === 'All') {
      setMovies(Data);
    } else {
      setMovies(Data.filter((movie) => movie.category === category));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === '') {
      setMovies(Data);
    } else {
      const filteredMovies = Data.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setMovies(filteredMovies);
    }
  };

  return (
    <div className='bg-[#121212]'>
      <Header />
      <div className='relative mt-[5vh] md:mt-[8vh]'>
        <div className='mb-5'>
          <div className='mb-4'>
            <input
              type='search'
              className='mb-2 w-full md:w-48 rounded border-2 border-[#00FE94] p-2 text-black font-bold'
              value={inputValue}
              onChange={handleInputChange}
              placeholder='Search...'
            />
          </div>
          <nav className='flex flex-wrap items-center justify-center'>
            <ul className='flex flex-wrap items-center justify-center gap-x-5 gap-y-2'>
              {uniqueCategories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => filterByCategory(category)}
                    className='cursor-pointer rounded-lg bg-[#00FE94] px-4 py-2 text-black font-bold hover:bg-[#00c87a] focus:outline-none focus:ring-2 focus:ring-[#00FE94] focus:ring-offset-2 active:scale-95'>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <main className='mt-5 flex justify-center'>
        <div className='w-full max-w-[111em]'>
          <div className='grid grid-cols-1 gap-y-10 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
            {movies.map((curr, i) => {
              const { photo, title, size, url } = curr;
              return (
                <Card
                  key={i}
                  index={i}
                  photo={photo}
                  title={title}
                  size={size}
                  url={url}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
