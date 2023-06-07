import useFetch from '@/app/hooks/useFetch';
import { Movie } from './types';

export const FetchMovies = async (page: number, searchTerm: string, data: { results: Movie[] } | null): Promise<{ total_results: number; total_pages: number; results: Movie[] }> => {
  try {
    const endpoint = searchTerm
      ? `/search/movie?query=${encodeURIComponent(searchTerm)}&page=${page}`
      : `/movie/top_rated?page=${page}`;
    const { data: responseData } = await useFetch<{
      total_results: number;
      total_pages: number;
      results: Movie[];
    }>(`${endpoint}`);

    if (!responseData) {
      throw new Error('Invalid response: Data is null');
    }
    const results = page === 1 ? responseData.results : [...(data?.results || []), ...responseData.results];
    return {
      total_results: responseData.total_results,
      total_pages: responseData.total_pages,
      results,
    };
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};
