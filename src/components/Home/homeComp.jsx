import {Col, Card } from 'react-bootstrap';

function CardMovie({movie}) {
    return (
        <Col key={movie.id}>
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default CardMovie;