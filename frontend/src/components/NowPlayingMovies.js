import React from "react";
import { useSelector } from "react-redux";
import AllMovieCard from "./AllMovieCard";
import Header2 from "./Header2";

const NowPlayingMovies = () => {
  const nowPlayingMoviesList = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  return (
    <>
      <Header2 />
      <div className=" text-xl text-red-700 flex justify-center items-center bg-black py-10">
        <AllMovieCard title={"Coming Soon ✨"} movies={nowPlayingMoviesList} />
      </div>
    </>
  );
};

export default NowPlayingMovies;
