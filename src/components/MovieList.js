import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
const MovieList = ({movies , inputsearch,inputRate}) => {
  
  return (
    <div className='top'>
        {(inputRate>0)?
        movies
        .filter(movie =>movie.title.toUpperCase().includes(inputsearch.toUpperCase().trim()) && movie.rate ===(inputRate) )
   
       
        
        
        
        .map(movie => <MovieCard movie = {movie} key={movie.id}/>):
        movies.filter(movie =>movie.title.toUpperCase().includes(inputsearch.toUpperCase())).map(movie => <MovieCard movie = {movie} key={movie.id}/>)}
    </div>
  )
}

export default MovieList