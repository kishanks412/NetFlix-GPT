import {useEffect}from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails} from "../utils/moviesSlice";


const useMovieInformation =(id,options)=>{
    const dispatch = useDispatch()
    const fetchTrailer = async () => {
        const json = await fetch(
          'https://api.themoviedb.org/3/movie/' + id,
          options
        );
        const movieDetails = await json.json();
       
    
        dispatch(addMovieDetails(movieDetails))
      };
    
      useEffect(() => {
        fetchTrailer();
      }, [id,options]);

}

export default useMovieInformation;