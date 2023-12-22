import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { signin_Background } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className=''>
      <div className="fixed -z-10">
        <img
          src= {signin_Background}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch