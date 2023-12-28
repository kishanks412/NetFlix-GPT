import React from "react";
// import MovieCard from './MovieCard'
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MoviesCard from "./MoviesCard";
import Header2 from "./Header2";

const AllMovieCard = ({ movies, title }) => {
  const navigate = useNavigate();
  const handlePageNavigate = () => {
    navigate("/browse");
  };

  if (!movies) return null;
  return (
    <div className="-mt-10">




      <div className="flex flex-row justify-between">
        <div
          className=" px-9 z-50 right-28 left-0 top-3 md:right-48 md:left-16 md:top-5 lg:left-8 lg:top-2 "
          onClick={handlePageNavigate}
        >
          <a
            href="#_"
            className="relative inline-flex items-center justify-center p-2 px-3 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out shadow-md group md:p-1 md:px-4 md:py-1 rounded-md  md:border-[1px] md:border-[#f47f7f90]  lg:p-4 lg:px-6 lg:py-2"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#E50914] group-hover:translate-x-0 ease">
              {<MoveLeft strokeWidth={1} />}
            </span>
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#E50914] group-hover:translate-x-0 ease">
              {<MoveLeft strokeWidth={1} />}
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white text-[15px] transition-all duration-300 transform group-hover:translate-x-full ease md:text-[15px] lg:text-[18px]">
              Homepage
            </span>
            <span className="relative invisible">GPT Search</span>
          </a>
        </div>
        <h1 className="p-5 pt-10 md:p-10 text-xs font-semibold md:text-2xl text-white -mt-8 mr-10">
          {title}
        </h1>
      </div>
      
      
      
      
      <div className="flex flex-wrap w-auto gap-x-6 gap-y-8 justify-start items-center bg-black px-10 py-2   md:pl-16 lg:px-8 ">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} size={true} />
        ))}
      </div>
    </div>
  );
};

export default AllMovieCard;
