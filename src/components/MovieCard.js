
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import './MovieList.css'
const MovieCard = ({movie}) => {
 
  return (
    <div className='jng'>
   <Card className='marto' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        
        <Card.Text>
         {movie.description}
         
         
        </Card.Text>
        <ReactStars
  count={5}
  value={movie.rate}
  size={24}
  color2={'#ffd700'}
  edit = {false} />,
  <div className='button'>
  <button ><a className = 'b1'href={movie.trailer} target = {"blanck"}>trailer</a></button>
   <Link to = {'/${movie.id}'}><button className='supp'>Description</button></Link>
  </div>
      </Card.Body>
     
      
    </Card>
      
    </div>
  )
}

export default MovieCard