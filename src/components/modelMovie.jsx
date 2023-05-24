import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

function ModelMovie({show, handleClose, singleMovie}) {

  const addFavoriteMovie = () => {
    axios.post(`https://movies-library-e7nr.onrender.com/addMovie`, singleMovie)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  
  

  return (
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton centered>
      <Modal.Title>{singleMovie.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Container>
      <Row >
        <Col xs={6} md={4} >
          <Image src={`https://image.tmdb.org/t/p/w400/${singleMovie.poster_path}`} alt="Movie Poster" rounded />
        </Col>
      </Row>
    </Container>
    {singleMovie.overview}
     <Container>
        <br />
    </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="secondary" onClick={addFavoriteMovie}>
      Add to Favorite
      </Button>
    </Modal.Footer>
  </Modal>

  );
}

export default ModelMovie;