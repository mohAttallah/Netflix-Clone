import {Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function CardMovie({movie, handleShow, setSingleMovie}) {
    const handleClick =() =>{
        setSingleMovie(movie)
        handleShow()
    }
    return (
        <Col key={movie.id}>
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    {/* <Card.Text>{movie.overview}</Card.Text> */}
                    <Button variant="primary" onClick={handleClick}>Details</Button>
                </Card.Body>
            </Card>
        </Col>

    );
    
}

export default CardMovie;