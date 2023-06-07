type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
  tagline: string;
  genres: Genre[];
  runtime: number;
  vote_average: number;
};

export type MoviesStore = {
  loading: boolean;
  loadingMore: boolean;
  data: {
    total_results: number;
    total_pages: number;
    results: Movie[];
  } | null;
  error: string | null;
  page: number;
  searchTerm: string;
  movieDetails: Movie | null;
  fetchMovies: () => void;
  loadMoreMovies: () => void;
  searchMovies: (term: string) => void;
  fetchMovieDetails: (movieId: number) => void;
};
