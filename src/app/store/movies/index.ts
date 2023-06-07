import { create } from 'zustand';

import { MoviesStore } from './utils/types';
import { FetchMovies } from './utils/fetchMovies';
import { FetchMovieDetails } from './utils/fetchMovieDetails';

const useMoviesStore = create<MoviesStore>((set, get) => ({
  loading: true,
  loadingMore: false,
  data: null,
  error: null,
  page: 1,
  searchTerm: '',
  movieDetails: null,
  fetchMovies: () => {
    set({
      loading: true,
      loadingMore: false,
      data: null,
      error: null,
      page: 1,
    });
    const { page, searchTerm } = get();
    FetchMovies(page, searchTerm, null) // Pass null as the third argument
      .then((updatedData) => {
        set({ loading: false, loadingMore: false, data: updatedData });
      })
      .catch((error) => {
        set({ loading: false, loadingMore: false, error: error.message });
        console.error('Failed to fetch movies:', error);
      });
  },
  fetchMovieDetails: (movieId: number) => {
    set({ loading: true });
    FetchMovieDetails(movieId)
      .then((data) => {
        set({ loading: false, movieDetails: data });
      })
      .catch((error) => {
        set({ loading: false, movieDetails: null, error: error.message });
        console.error('Failed to fetch movie details:', error);
      });
  },
  loadMoreMovies: () => {
    set((state) => ({ page: state.page + 1, loadingMore: true }));
    FetchMovies(get().page + 1, get().searchTerm, get().data) // Pass the existing data as the third argument
      .then((updatedData) => {
        set({ loadingMore: false, data: updatedData });
      })
      .catch((error) => {
        set({ loadingMore: false, error: error.message });
        console.error('Failed to fetch movies:', error);
      });
  },
  searchMovies: (term: string) => {
    set({ loading: true, searchTerm: term, page: 1 });
    FetchMovies(1, term, null) // Pass null as the third argument
      .then((updatedData) => {
        set({ loading: false, data: updatedData });
      })
      .catch((error) => {
        set({ loading: false, error: error.message });
        console.error('Failed to fetch movies:', error);
      });
  },
}));

export default useMoviesStore;
