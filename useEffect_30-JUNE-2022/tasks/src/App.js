import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About'
// import Contact from './component/Contact'
import Movies from './component/Movies'
import Movie from './component/Movie'
import { useState, useEffect } from "react";

function App() {

  const [movies, setMovies] = useState([]);
  

  const fetchMovies = async()=> {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ab9ae6f4f09635a061ce19661cd57229')
    const movies = await response.json();
    // console.log(movies)
    setMovies(movies.results)
  }
  useEffect(()=> {
    fetchMovies();
  }
  ,[])


  return (
    <BrowserRouter>
    <div>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home movies={movies}/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/movies" element={<Movies  movies={movies}/>}/>
    <Route path="/movie/:title/:id" element={<Movie />}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
