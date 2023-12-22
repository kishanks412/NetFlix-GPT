import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MoviesCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 pr-4'>
        <img src= {IMG_CDN_URL + posterPath} alt="movie_card" />
    </div>
  )
}

export default MoviesCard