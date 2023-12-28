import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";

const MoviesCard = ({ movie, size }) => {
  const navigate = useNavigate();
  const { poster_path, title, id } = movie;

  if (!movie.poster_path) return null;

  const handleMovie = () => {
    navigate(`/movie/${id}`);
  };
  
  const classNames = size
  ? '  w-32 md:w-52'
  : 'w-28 md:w-40'; 

  return (
    <div
      className={classNames}
      
      onClick={handleMovie}
    >
      <img
        // className="w-full h-auto rounded-lg cursor-pointer"
        className="cursor-pointer rounded-lg hover:scale-110 transition duration-500 md:object-cover"
        src={IMG_CDN_URL + poster_path}
        alt={title}
      />
    </div>
  );
};

export default MoviesCard;
