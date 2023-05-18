import { useState, useEffect } from "react"
import MovieList from "../movielist/MovieList"
import axios from "axios"

const Home = () => {
    const [popularMovie,setPopularMovie]=useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovie(data.results))
    },[])

    return(
        <>
            <div className="poster">
                <MovieList/>
            </div>
        </>
    )
}
export default Home;