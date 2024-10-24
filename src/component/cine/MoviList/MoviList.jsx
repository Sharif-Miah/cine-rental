import { getAllMovies } from "../../../data/movies";
import MoviCart from "./MoviCart/MoviCart";

const MoviList = () => {
  const movies = getAllMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MoviCart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviList;
