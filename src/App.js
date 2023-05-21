import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/header.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/home.jsx";
import MovieList from "../src/components/MovieList/movieList.jsx";
import ModelMovie from "../src/components/modelMovie/modelMovie.jsx";
import Movie from "../src/components/movie/movie.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieList" element={<MovieList />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/modelMovie" element={<ModelMovie />} />
      </Routes>
    </div>
  );
}

export default App;
