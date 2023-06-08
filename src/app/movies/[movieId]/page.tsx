import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { PageSkeleton } from '@/app/common/components';

interface PageProps {
  params: {
    movieId: number;
  };
}

const MovieDetails = dynamic(
  () => import('@/app/modules/movies/screens/MovieDetails'),
  { loading: () => <PageSkeleton /> }
);

const Page: NextPage<PageProps> = ({ params }) => {
  const { movieId } = params;

  return (
    <div className="flex justify-center p-5">
      <div className="w-full md:w-3/4">
        <MovieDetails movieId={movieId} />
      </div>
    </div>
  );
};

export default Page;
