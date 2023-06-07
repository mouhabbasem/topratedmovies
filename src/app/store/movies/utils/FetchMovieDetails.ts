
import { useFetch } from '@/app/hooks';
import { Movie } from './types';

export const FetchMovieDetails = async (movieId: number): Promise<Movie> => {
  try {
    const { data } = await useFetch<Movie>(`/movie/${movieId}`);

    if (!data) {
      throw new Error('Invalid response: Data is null');
    }
    return data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
};
