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
  
  // Generating unique categories
  const uniqueCategories = useMemo(() => {
    const categories = Data.map((movie) => movie.category);
    return ['All', ...new Set(categories)];
  }, []);

  // Filter by category
  const filterByCategory = (category: string) => {
    if (category === 'All') {
      setMovies(Data);
    } else {
      const filtered = Data.filter((movie) => movie.category === category);
      setMovies(filtered);
    }
  };

  // Handle search input change
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
    <div className="bg-gray-50">
      <Header />
      
      {/* Navigation Section */}
      <div className="relative mt-[8vh]">
        <nav className="flex flex-wrap items-center justify-center">
          {/* Categories */}
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {uniqueCategories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => filterByCategory(category)}
                  className="cursor-pointer rounded-lg bg-[#00FE94] px-4 py-2 text-white transition-all hover:bg-[#00c87a] focus:outline-none focus:ring-2 focus:ring-[#00FE94] focus:ring-offset-2 active:scale-95 shadow-md">
                  {category}
                </button>
              </li>
            ))}
          </ul>

          {/* Search Input */}
          <div className="mb-2 mt-4 md:relative md:ml-20 md:w-64">
            <input
              type="search"
              className="w-full rounded-lg border-2 border-[#00FE94] px-4 py-2 text-sm placeholder-[#00FE94] focus:outline-none focus:ring-2 focus:ring-[#00FE94]"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search movies..."
            />
          </div>
        </nav>
      </div>

      {/* Movies Section */}
      <main className="mt-8 flex justify-center">
        <div className="w-full max-w-[111em]">
          <div className="grid grid-cols-2 gap-6 px-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
