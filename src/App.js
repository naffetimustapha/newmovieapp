import './App.css';
import{useState} from 'react'
import{moviesData} from './components/Data'
import MovieList from './components/MovieList'
import FiltyerMovies from './components/FilterMovies';
import AddMovie from './components/AddMovie';

function App() {
  const[movies,setmovies] = useState (moviesData)
  const add = (newMovie) =>{
setmovies ([...movies,newMovie])
}

const[inputsearch,setinputsearch]= useState ("")
const[inputRate,setinputRate] = useState (0)
  return (
    <div className="App">
    
      <FiltyerMovies inputsearch={inputsearch} setinputsearch={setinputsearch} inputRate={inputRate} setinputRate={setinputRate} />
      <MovieList movies = {movies} inputsearch={inputsearch} inputRate ={inputRate}/>
      <AddMovie add={add}/>
    </div>
  );
}

export default App; 
