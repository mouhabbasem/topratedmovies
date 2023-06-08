import React from 'react';
import { NextPage } from 'next';
import { MovieDetails } from '@/app/modules/movies/screens';


interface PageProps {
  params: {
    movieId: number;
  };
}

const Page: NextPage<PageProps> = ({ params }) => {
  const { movieId } = params;

  return (
    <div className="flex justify-center p-5">
      <div className="w-full md:w-3/4">
        {/* Render details view */}
        <MovieDetails movieId={movieId} />
      </div>
    </div>
  );
};

export default Page;
