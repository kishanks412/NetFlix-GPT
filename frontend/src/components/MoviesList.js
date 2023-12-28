import React from "react";
import MoviesCard from "./MoviesCard";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MoviesList = ({ title, movies, move, rightArrow }) => {
  const navigate = useNavigate();
  const handleMoviesPage = () => {
    navigate("/browse/" + move);
  };
  return (
    <>
      {!movies && <h1>Something Went wrong</h1>}
      <div className="px-6 ">
        <div className="py-6 mt-1 flex justify-between">
          <h1 className="text-lg md:text-3xl   text-white">{title}</h1>
          {rightArrow && <ChevronRight className="cursor-pointer hover:scale-[130%] " style={{ color: 'white' }} onClick={handleMoviesPage} />}
        </div>

        <div className="flex overflow-x-scroll py-4">
          <div className="flex gap-5">
            {movies?.map((movie) => (
              <MoviesCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
