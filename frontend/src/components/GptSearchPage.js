import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { signin_Background } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className=" h-screen object-cover md:h-auto " 
        src={signin_Background} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
