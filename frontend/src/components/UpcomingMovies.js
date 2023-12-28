import React from "react";
import { useSelector } from "react-redux";
import AllMovieCard from "./AllMovieCard";
import Header2 from "./Header2";

const UpcomingMovies = () => {
  const upcomingMoviesList = useSelector(
    (store) => store.movies.upcomingMovies
  );

  return (
    <>
      <Header2 />
      <div className=" text-xl text-red-700 flex justify-center items-center bg-black py-10">
        <AllMovieCard title={"Coming Soon ✨"} movies={upcomingMoviesList} />
      </div>
    </>
  );
};

export default UpcomingMovies;
