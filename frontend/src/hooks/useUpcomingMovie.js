import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovie = () => {

  const dispatch = useDispatch();
  const upcomingMovie = useSelector(
    (store) => store.movies.upcomingMovies
  );

  const getUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=hi-IN&region=IN&with_original_language=hi",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovie && getUpcomingMovie();
  }, []);
};

export default useUpcomingMovie;