import React, { useEffect, useState } from 'react'
import MovieList from "./movieList.jsx";
import axios from 'axios'
export default function Home(){
const [trendMovie, setTrendMovie] = useState([]);


async function getTrend (){
    await  axios.get("https://movies-library-e7nr.onrender.com/trending")
    .then(res =>  setTrendMovie(res.data.data))
    .catch(err => console.log(err));
}

useEffect(() => {
    getTrend()
}, [])

return <div>
<MovieList movies={trendMovie} />


</div>;
}


