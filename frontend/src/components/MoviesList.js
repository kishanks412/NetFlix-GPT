import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 ">
        <h1 className="text-xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hidden">
        <div className="flex">
            {movies?.map(movie => <MoviesCard key={movie.id} posterPath={movie.poster_path}/>)}
          
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
