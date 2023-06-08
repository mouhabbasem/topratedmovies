'use client';
import React, { useEffect } from 'react';

import { useMoviesStore } from '@/app/store';
import { EmptyView } from '@/app/common/components';
import { ListSkeleton, LoadMoreButton, MovieCard } from '../../components';

const MoviesList: React.FC = () => {
  const { loading, data, error, loadingMore, fetchMovies, loadMoreMovies } = useMoviesStore();
  
  // Fetch movies when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  // Show skeleton loader while loading
  if (loading) {
    return <ListSkeleton />;
  }

  // Handle retry to fetch if something went wrong!
  const RetryFetch = () => {
    fetchMovies();
  }

  // Show error message if there's an error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="mt-20">Something went wrong!</p>
        <button
          type="button"
          onClick={RetryFetch}
          className="h-12 w-56 uppercase py-2.5 px-5 mt-5 text-sm font-medium text-gray-900-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Retry
        </button>
      </div>
    );
  }

  // Show empty view if there are no movies
  if (data === null || data.total_results === 0) {
    return <EmptyView />;
  }

  // Handle load more button click
  const handleLoadMore = () => {
    loadMoreMovies();
  };

  

  const { results, total_results } = data;

  return (
    <>
      <div className="mt-20">
        {/* Render movie cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {/* Render load more button */}
        <LoadMoreButton
          totalResults={total_results || 0}
          resultsLength={results.length || 0}
          loadingMore={loadingMore}
          onLoadMore={handleLoadMore}
        />
      </div>
    </>
  );
};

export default MoviesList;
