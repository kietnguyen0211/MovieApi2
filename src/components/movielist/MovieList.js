import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "../card/Card"
import css from "../movielist/MovieList.css"
import {
    Row,
    Col
} from "react-bootstrap"
const MovieList = () => {
    const [movieList,setMovieList]=useState([])
    
    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        axios
            .get(url)
            .then((res)=>{
                setMovieList(res.data.results)
                console.log(res);
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className="movie_list">
            <Row>
                {/* <h2 className="list_title">POPULAR</h2> */}
                <div className="list_card">
                    {
                        movieList.map((movie,key) => {
                            return(
                                <Col xs={6} md={4} lg={2} key={key} >
                                    <Cards key={key} movie={movie}/>
                                </Col>
                            )
                        })
                    }
                </div>
            </Row>
        </div>
    )
}
export default MovieList