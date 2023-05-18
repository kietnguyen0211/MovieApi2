import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const MovieDetail = () => {
    const [data,setData]=useState([])
    const {id}=useParams()
    console.log(id)

    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        console.log(url)
        axios
            .get(url)
            .then((res)=>{
                setData(res.data)
                console.log(res);
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    useEffect(()=>{
        getData()
    },[id])
   
    return(
        <div>
                <h1>{data&&data.title}</h1>
        </div>
    )
}
export default MovieDetail