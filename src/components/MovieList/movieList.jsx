import { Row } from "react-bootstrap";
import CardMovie from "../Home/homeComp.jsx"; 

export default function MovieList({movies}) {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
            {
                movies.length && (
                    movies.map(item =>
                        <CardMovie movie={item} />
                        
                    ))
        }
        </Row> );
}
