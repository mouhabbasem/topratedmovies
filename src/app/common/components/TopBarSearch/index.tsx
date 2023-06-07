"use client";
import React, { useState } from 'react';

interface TopBarSearchProps {
  onSearch: (searchTerm: string) => void;
  onClearSearch: () => void;
}

const TopBarSearch: React.FC<TopBarSearchProps> = ({ onSearch, onClearSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value.trim() === '' && submitted) {
      onClearSearch(); // Reset movies if search term is empty
      setSubmitted(false);
    }
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      setSubmitted(true);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    if (submitted) {
      onClearSearch();
      setSubmitted(false);
    }
  };

  return (
    <div className="flex justify-center fixed top-0 left-0 w-full p-5 bg-black bg-opacity-50 backdrop-blur z-10">
      <div className="w-full md:w-3/4">
        <form onSubmit={handleSearchSubmit}>
          <div className="flex gap-2">
            <div className="w-9/12 relative">
              <input
                className="h-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search movies"
              />
              {searchTerm && (
                <button
                  className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                  type="button"
                  onClick={handleClearSearch}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="w-3/12">
              <button className="h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopBarSearch;
