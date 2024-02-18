import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in tmdb

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (error) {
      // console.error("Error fetching from TMDB API", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {

    // make api call to gpt api and get movie results

    const gptQuery =
      "Act as a movie, web, tv series recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me name of 5 movies,web, tv series, comma-separated like the example result given. Example Result: Koi, Sultan, Dhoom, Golmaal, Singham Returns";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices){
      // some erroe occured
      // console.log("error occured")
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")

    // this is dummy data
    // const gptMovies = [
    //   "Andaz Apna Apna",
    //   "Chupke Chupke",
    //   "Padosan",
    //   "Hera Pheri",
    //   "Amar Akbar Anthony",
    // ];
    // console.log(gptMovies);

    // for each movie i will search tmdb api
    const promiseMovieArray = gptMovies.map((movie) => searchMovieTMDB(movie))

   
   const tmdbResults = await Promise.all(promiseMovieArray)    
    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))
  };

  return (
    <div className="pt-[45%] md:pt-[8%] px-2 flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black bg-opacity-50 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-black rounded-full"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="my-5 mx-1 md:m-3 py-2 px-4 bg-red-700 text-white rounded-xl col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
