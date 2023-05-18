import { Link, Routes, Route } from "react-router-dom"
import css from "../card/Card.css"
import {useParams} from "react-router-dom"

const Cards = (props) => {
    const {movie} = props
    let id=movie.id
    console.log(id)
    return(
        <Link to={`/movie/${id}`} style={{textDecoration:"none",width:"fit-content", display:"inline-block", margin:"20px 0px 0px 30px"}}>
            <div className="card">
                
                <h1>{movie.original_title} </h1>
                
                <div className="image">
                    <img style={{width:"250px", height:"250px"}} className="card_img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}/>
                </div>
            </div>
        </Link>
    )
}
export default Cards