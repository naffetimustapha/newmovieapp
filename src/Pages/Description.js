import React from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
  const {id} = useParams()
  
  return (
    <div>
      <h1>
        {id}
      </h1>
     
      
      </div>
  )
}

export default Description