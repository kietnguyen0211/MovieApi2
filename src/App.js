import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Routes, Route, Link } from "react-router-dom"
import MovieDetail from "./components/movieDetail/MovieDetail"
import MovieList from "./components/movielist/MovieList";
export default function App(){
  // meo
  // meo
  return(
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="movie/:id" element={<MovieDetail/>} ></Route>
            <Route path="movies/:type" element={<MovieList/>}></Route>
           
        </Routes>
    </div>
  )
}