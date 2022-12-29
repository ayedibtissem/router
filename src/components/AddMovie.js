import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';
import { v4 as uuidv4 } from 'uuid';
function AddMovie({Adding}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const [newMovie,setNewMovie]=useState({
  id:uuidv4(),
  title: '',
  description: '',
  posterUrl: '',
  rating:0
});

    const handleChange=(e)=>{
      setNewMovie({...newMovie,[e.target.name]:e.target.value});
      
    };
    const handleAddMovie=()=>{
      Adding(newMovie);
      handleClose ();
  
    };

    return (
        <div>
 <Button variant="primary" onClick={handleShow}>
  Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
              onChange={handleChange}
                type="text"
                name="title"
                placeholder="Enter your movie"
                  autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control 
              onChange={handleChange}

                type="text"
                name="description"
                placeholder="Enter your description"
                  autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control 
              onChange={handleChange}

                type="text"
                name="posterUrl"
                placeholder="Enter your posterUrl "
                  autoFocus
              />
            </Form.Group>
            <Rating
        name="simple-controlled"
        max={10}
        defaultValue={0}
        onChange={(event, newValue) => {
          setNewMovie({...newMovie,rating : newValue});
           }}
      />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );

}export default AddMovie;