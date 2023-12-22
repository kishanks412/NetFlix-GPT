import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );

  

  // fetch trailer video && updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    // filtered trailer can contain multiples trailer
    const filteredTrailer = json.results.filter(
      (video) => video.name === "Trailer"
    );
    // const filteredTrailer = json.results.filter(video => video.name === "Official Trailer")

    const randomTrailer =
      filteredTrailer[Math.floor(Math.random() * filteredTrailer.length)];

    const trailer = filteredTrailer.length ? randomTrailer : json.results[0];

    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
