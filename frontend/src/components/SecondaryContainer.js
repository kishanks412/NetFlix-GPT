import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

{
  /*
        movielist -  popular
          moviecards * n;
        movielist -  now playing
          moviecards * n;
        movielist -  trending
          moviecards * n;
        movielist -  horror
          moviecards * n;
    */
}

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const trendingTVShows = useSelector((store) => store.tvShows.trendingTVShows);

  return (
    <div className=" w-[100%] bg-gray-900 pb-10">
      <div className="w-full mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        {nowPlayingMovies && (
          <MoviesList
            title={"Now Playing"}
            move={"nowPlaying"}
            rightArrow={true}
            movies={nowPlayingMovies}
          />
        )}
        {topRatedMovies && (
          <MoviesList
            title={"Top Rated Movies"}
            move={"topRated"}
            rightArrow={true}
            movies={topRatedMovies}
          />
        )}
        {upcomingMovies && (
          <MoviesList
            title={"Upcoming Movies"}
            move={"upcoming"}
            rightArrow={true}
            movies={upcomingMovies}
          />
        )}
        {popularMovies && (
          <MoviesList
            title={"Popular"}
            move={"popular"}
            rightArrow={true}
            movies={popularMovies}
          />
        )}
        {trendingMovies && (
          <MoviesList
            title={"Trending Movies"}
            move={"trendingMovies"}
            rightArrow={true}
            movies={trendingMovies}
          />
        )}
        {trendingTVShows && (
          <MoviesList
            title={"Trending TV Shows"}
            move={"trendingTVShows"}
            rightArrow={true}
            movies={trendingTVShows}
          />
        )}{" "}
      </div>
    </div>
  );
};

export default SecondaryContainer;
