import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {

  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.topRatedMovies
  );

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=hi-IN&region=IN&with_original_language=hi",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;