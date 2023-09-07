import { useEffect, useState } from "react";
import'./allMovies.css'

function AllMovies() {

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=44eb3ac861dd9f5c9d8114ae8fd29ca3'
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }  

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>

            {
                movies.map( movie => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                        <p>{movie.title}</p>
                    </div>    
                ))
            
            }
        </div>
    )
}

export default AllMovies