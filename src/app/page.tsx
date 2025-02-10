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
  downloadLinks: string[]; // Added for download links
  watchLinks: string[];    // Added for watch links
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
    <div className="bg-[#121212]">
      <Header />
      <div className="relative mt-[7vh] md:mt-[10vh]">
        {/* Centered Search Bar with margin-top adjustment */}
        <div className="flex justify-center">
          <input
            type="search"
            className="w-full md:w-80 lg:w-96 xl:w-1/3 rounded-lg border-2 border-[#00FE94] p-3 text-black font-bold placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-[#00FE94]"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search..."
          />
        </div>
        {/* Categories Box with modern border style */}
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-[80%] lg:w-[70%]">
            <div className="border-2 border-[#00FE94] rounded-lg p-6">
              <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                {uniqueCategories.map((category) => (
                  <li key={category} className="list-none">
                    <button
                      onClick={() => filterByCategory(category)}
                      className="cursor-pointer rounded-lg bg-[#00FE94] px-5 py-3 text-black font-bold hover:bg-[#00c87a] focus:outline-none focus:ring-2 focus:ring-[#00FE94] focus:ring-offset-2 active:scale-95"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <main className="mt-10 flex justify-center">
        <div className="w-full max-w-[111em]">
          <div className="grid grid-cols-2 gap-y-10 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {movies.map((curr, i) => {
              const { photo, title, size, downloadLinks, watchLinks } = curr;
              return (
                <Card
                  key={i}
                  index={i}
                  photo={photo}
                  title={title}
                  size={size}
                  downloadLinks={downloadLinks} // Pass downloadLinks to Card
                  watchLinks={watchLinks}       // Pass watchLinks to Card
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
