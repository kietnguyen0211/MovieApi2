import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import MovieList from "../movielist/MovieList"
const Header = () => {
    
    return(
        <div className="header">
            <div className="headerLeft">
                <Link to="movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="movies/upcoming" style={{textDecoration:"none"}}><span>Up Coming</span></Link>
            </div>
            
        </div>
    )
}
export default Header;