import { createBrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MovieDetails from "./MovieDetails";
import UpcomingMovies from "./UpcomingMovies";
import NowPlayingMovies from "./NowPlayingMovies";
import TopRatedMovies from "./TopRatedMovies";
import PopularMovies from "./PopularMovies";
import TrendingMovies from "./TrendingMovies";
import TrendingTVShows from "./TrendingTVShows";
import { useSelector } from "react-redux";

const Body = () => {
  const user = useSelector((store) => store.user);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/nowPlaying",
      element: <NowPlayingMovies />,
    },
    {
      path: "/browse/topRated",
      element: <TopRatedMovies />,
    },
    {
      path: "/browse/upcoming",
      element: <UpcomingMovies />,
    },
    {
      path: "/browse/popular",
      element: <PopularMovies />,
    },
    {
      path: "/browse/trendingMovies",
      element: <TrendingMovies />,
    },
    {
      path: "/browse/trendingTVShows",
      element: <TrendingTVShows />,
    },
    {
      // Add a nested route for movie details
      path: "/movie/:id",
      element: <MovieDetails />,
    },
  ]);

  return (
    <>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    
    {user && <Footer />}
    </>
  );
};

export default Body;
