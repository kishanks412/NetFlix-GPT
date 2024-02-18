import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
    );
    // console.log("running",nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  const initDispatch = useCallback(() => getNowPlayingMovies(), [dispatch]);
  useEffect(() => {
     initDispatch();
  }, []);
  // useEffect(() => {
  //  && getNowPlayingMovies();
  // }, []);
};

export default useNowPlayingMovies;
