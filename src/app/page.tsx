import { SearchMovies } from "./modules/movies/components";
import { MoviesList } from "./modules/movies/screens";

export default function Home() {
  return (
    <div className="flex justify-center p-5">
      <div className="w-full md:w-3/4">
        {/* Render the search form */}
        <SearchMovies />

        {/* Render results */}
        <MoviesList />
      </div>
    </div>
  )
}
