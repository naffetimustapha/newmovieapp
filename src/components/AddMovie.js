import React, { useState } from 'react'
import { Button,Modal } from 'react-bootstrap';
import{Form} from "react-bootstrap"
const AddMovie = ({add}) => {
  
    const [show, setShow] = useState (false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,settitle]= useState("")
    const [rate,setrate]= useState("")
    const [description,setdescription]= useState("")
    const [posterUrl,setposterUrl]= useState("")
    const handletitle =(e)=>{
      settitle(e.target.value)
    }
    const handlerate =(e)=>{
      setrate(e.target.value)
    }

   const handledescription =(e)=>{
      setdescription(e.target.value)
    }

    const handleposterUrl =(e)=>{
      setposterUrl(e.target.value)
    }
    const handleAdd=()=>{
      let newMovie = {title,rate,description,posterUrl}
      add(newMovie)
    }


  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <h5>add title</h5>
        <Form.Control type="text" placeholder="title" onChange={(e)=>handletitle(e) } />
        <h5>rate</h5>
        <Form.Control type="number" placeholder="rate" onChange={(e)=>handlerate(e) }  />
        <h5>add description</h5>
        <Form.Control type="text" placeholder="description" onChange={(e)=>handledescription(e) }  />
        <h5>add url</h5>
        <Form.Control type="url" placeholder="posterUrl" onChange={(e)=>handleposterUrl(e) }  />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie