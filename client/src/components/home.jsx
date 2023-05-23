import React, { useEffect, useState } from 'react'
import MovieList from "./movieList.jsx";
import axios from 'axios'
export default function Home(){
const [trendMovie, setTrendMovie] = useState([]);

function getTrend (){
    axios.get(`${process.env.REACT_APP_API_TRENDING}?api_key=${process.env.REACT_APP_API_KEY}`).then(res =>  setTrendMovie(res.data.results)).catch(err => console.log(err));
}
useEffect(() => {
    getTrend()
}, [])

return <div>
        
<MovieList movies={trendMovie} />

</div>;
}






