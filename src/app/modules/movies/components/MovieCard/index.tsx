"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface MovieCardProps {
  movie: {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    overview: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex flex-col">
      <div className="w-full h-56 flex items-center justify-center">
        {movie.poster_path ? (
          <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        ) : (
          <svg
            className="w-20 h-20 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        )}
      </div>

      <div className="flex flex-col justify-between p-4 flex-grow">
        <div>
          <h2 className="text-base font-bold mb-2">{movie.title}</h2>
          <p className="text-xs mb-4">Release Date: {movie.release_date}</p>
          <p className="text-sm text-gray-400 line-clamp-3">{movie.overview}</p>
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded w-full mt-4"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
