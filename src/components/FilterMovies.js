import React from 'react'
import{Form} from "react-bootstrap"
import ReactStars from 'react-stars'
const FiltyerMovies = ({inputsearch , setinputsearch ,setinputRate , inputRate }) => {
  return (
    <div>
  <Form.Label>movie name</Form.Label>
  
        <Form.Control type="name" placeholder="movie name" 
        onChange={(e)=>setinputsearch(e.target.value)}
        value={  inputsearch   } />
       
       
       <ReactStars
  count={5}
 onChange={setinputRate}
  size={24}
  color2={'#ffd700'} />,
       
       
        
     
        

    </div>
  )
}

export default FiltyerMovies