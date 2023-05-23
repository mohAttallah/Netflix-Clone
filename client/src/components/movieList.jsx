import { Row } from "react-bootstrap";
import CardMovie from "./homeComp.jsx"; 
import ModelMovie from "./modelMovie.jsx";
import { useState } from "react";

//for Model 

export default function MovieList({movies}) {
  const [show, setShow] = useState(false);

  const [singleMovie, setSingleMovie] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
            {
                movies.length && (
                    movies.map(item =>
                        <CardMovie movie={item} handleShow={handleShow}  setSingleMovie={setSingleMovie}/>
                        
        ))}
        </Row> 
                <ModelMovie show={show} handleClose={handleClose} singleMovie={singleMovie} />
                </div>
                        );

}
