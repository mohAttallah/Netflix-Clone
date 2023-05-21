import axios from "axios";
import { useState, useEffect, } from "react";
import MovieList from "../MovieList/movieList.jsx";

export default function Home() {
    const [movies, setMovie] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async()=> {
        try { 
            const api = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0")
            console.log(api.data.results);
            setMovie(api.data.results);
        } catch (err) {
            console.log(err);
            }
        } 
        
    return <div>
        
        <MovieList movies={movies}/>
        
    </div>;
        
};

