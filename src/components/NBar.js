import React from 'react'
import {Navbar,Container , Nav} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
const NBar = () => {
  const navigate = useNavigate()
  return (
    <div>
         
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home of Movies</Navbar.Brand>
          <Nav className="ml-auto">
            
            <Nav.Link onClick={()=> navigate('/Description')}>Description</Nav.Link>
            <Nav.Link onClick={()=> navigate('/Trailer')}>Trailer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NBar