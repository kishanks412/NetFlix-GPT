import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestion = () => {
  const { gptMovieResults, gptMovieNames } = useSelector((store) => store.gpt);

  if (!gptMovieNames) return null;
  return (
    <div className="rounded-lg p-4 my-8 md:my-20 mx-4 md:mx-12 bg-black bg-opacity-80 text-white">
      <div>
        {gptMovieNames.map((movieName,index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={gptMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
