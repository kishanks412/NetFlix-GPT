import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  // fetch data from tmdb api and update the store through the custom hook
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      {/*

          header

          main container
          - video background
          - videotitle

          secondary container
          - movielist * n
          - cards*n

      */}
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
