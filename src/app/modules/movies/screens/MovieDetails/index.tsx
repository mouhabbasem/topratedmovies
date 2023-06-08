'use client';
import React, { useEffect } from 'react';

import { useMoviesStore } from '@/app/store';
import { Breadcrumb, EmptyView, PageSkeleton } from '@/app/common/components';

interface MovieDetailsProps {
  movieId: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const { movieDetails, fetchMovieDetails, loading, error } = useMoviesStore();

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, [movieId]);

  if (loading) {
    return <PageSkeleton />;
  }

  if (error) {
    return <p className="mt-20 text-white">Something went wrong!</p>;
  }

  if (movieDetails === null) {
    return <EmptyView />;
  }

  const routes = [
    { route: '/', label: 'Movies' },
    { route: '', label: movieDetails.title },
  ];
  

  return (
    <>
      <Breadcrumb routes={routes} />
      <div className="bg-black py-5 text-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            {
              movieDetails.poster_path
              ? <img
                  src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                  className="rounded-lg"
                />
              : <div className="flex items-center justify-center h-64">
                  <svg
                    className="w-20 h-20 text-gray-200 dark:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
            }
          </div>
          <div className="md:w-2/3 md:ml-10">
            <h1 className="text-2xl font-bold mb-2">{movieDetails.title}</h1>
            <p className='mb-2'>{movieDetails.tagline}</p>
            <p className="mb-4">{movieDetails.overview}</p>
            <div className="flex flex-wrap mb-4">
              {movieDetails.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-800 text-gray-300 px-2 py-1 rounded-lg mr-2 mb-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <p>
              <span className="font-bold">Release Date:</span> {movieDetails.release_date}
            </p>
            <p>
              <span className="font-bold">Runtime:</span> {movieDetails.runtime} minutes
            </p>
            <p>
              <span className="font-bold">Vote Average:</span> {movieDetails.vote_average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
