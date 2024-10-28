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
    <div className='bg-red-50'>
      <Header />
      <div className='relative mt-[8vh]'>
        <nav className='flex flex-wrap items-center justify-center'>
          <ul className='flex flex-wrap items-center justify-center gap-x-5 gap-y-2'>
            {uniqueCategories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => filterByCategory(category)}
                  className='cursor-pointer rounded-lg bg-red-500 px-2 py-1 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 active:scale-95'>
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <div className='mb-0 mt-2 md:relative md:ml-20 md:w-48'>
            <input
              type='search'
              className='mb-2 rounded border-2 border-[#991B1B] p-2'
              value={inputValue}
              onChange={handleInputChange}
              placeholder='Search...'
            />
          </div>
        </nav>
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
