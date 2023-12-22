import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrendingTVShows } from "../utils/tvShowsSlice";


const useTrendingTVShows = () => {
  const dispatch = useDispatch();

  const trendingTVShows = useSelector((store) => store.movies.trendingTVShows);

  const getTrendingTVShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=hi-IN&region=IN&with_original_language=hi",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingTVShows(json.results));
  };

  useEffect(() => {
    !trendingTVShows && getTrendingTVShows();
  }, []);
};

export default useTrendingTVShows;
