import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const [randomMovies, setRandomMovies] = useState(null);

  useEffect(()=>{
    
    if(movies?.length>0){
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      !randomMovies && setRandomMovies(randomMovie)
    }
  },[movies])
  if (!randomMovies) return;
  

  // console.log("randomMovies", randomMovies);



  

  return (
    <div className=" pt-[30%] bg-gray-900 md:pt-0">
      <VideoTitle title={randomMovies?.original_title} overview={randomMovies?.overview} />
      <VideoBackground movieId={randomMovies?.id} />
    </div>
  );
};


export default MainContainer;
