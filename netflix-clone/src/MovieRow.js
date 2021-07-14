import React,{useState,useEffect} from 'react'
import axios from './axios'
import './MovieRow.css'

const MovieRow = ({title,fetchURL,isLargeRow = false}) => {

    const [movies,setMovies] = useState([])

    const url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(fetchURL)
            setMovies(response.data.results)
        }

        fetchData()
    }, [fetchURL])

    return (
        <div className='movie-row'>
            <h2 className='row'>{title}</h2>

            <div className='row-posters'>
                {movies.map((movie)=>{
                    return(
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                                <img key={movie.id} className={`row-poster ${isLargeRow && 'row-posterLarge'}`} src={`${url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title}></img>
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default MovieRow
