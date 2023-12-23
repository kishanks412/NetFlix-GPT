import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  const tvShows = useSelector(store => store.tvShows)
  return (
    <div className='bg-gray-900'>
      <div className='mt-0 md-mt-52 pl-4 md:pl-12 relative z-20'>

      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MoviesList title={"Popular"} movies={movies.popularMovies} />
      <MoviesList title={"Trending Movies"} movies={movies.trendingMovies} />
      <MoviesList title={"Trending TV Shows"} movies={tvShows.trendingTVShows} />
      </div>
      {/*
        movielist -  popular
          moviecards * n;
        movielist -  now playing
          moviecards * n;
        movielist -  trending
          moviecards * n;
        movielist -  horror
          moviecards * n;
      */}
    </div>
  )
}

export default SecondaryContainer