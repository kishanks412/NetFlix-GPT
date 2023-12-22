import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    <div className='bg-gray-900'>
      <div className='-mt-52 pl-12 relative z-20'>

      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MoviesList title={"Popular"} movies={movies.popularMovies} />
      <MoviesList title={"Trending Movies"} movies={movies.trendingMovies} />
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