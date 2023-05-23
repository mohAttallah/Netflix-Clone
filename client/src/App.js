import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import MovieList from "./components/movieList.jsx";
import ModelMovie from "./components/modelMovie.jsx";
import Movie from "./components/movie.jsx";
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
