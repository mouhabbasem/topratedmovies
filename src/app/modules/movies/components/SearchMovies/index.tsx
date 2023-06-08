"use client";
import React from 'react';

import { TopBarSearch } from '@/app/common/components';
import { useMoviesStore } from '@/app/store';


const SearchMovies: React.FC = () => {
  const { searchMovies } = useMoviesStore();

  return <TopBarSearch onSearch={searchMovies} onClearSearch={() => searchMovies('')} />
};

export default SearchMovies;
