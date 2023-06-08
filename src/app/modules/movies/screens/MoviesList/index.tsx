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

  // Show error message if there's an error
  if (error) {
    return <p className="mt-20">Something went wrong!</p>;
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
