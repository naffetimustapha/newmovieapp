import React from 'react'
import {Routes,Route} from 'react-router-dom'
import App from './App'
import NBar from './components/NBar'
import Description from './Pages/Description'
import Trailer from './Pages/trailer'
import Error from './Pages/Error'



const Web = () => {
  
  return (
    <div>
          <NBar/>
        <Routes>
        
<Route exact path='/' element ={<App/>}/>
<Route path='/Description/:id' element = {<Description/>}/>
<Route path='/Trailer' element = {<Trailer/>}/>
<Route path='/*' element = {<Error/>}/>



 




        </Routes>
    </div>
  )
}

export default Web