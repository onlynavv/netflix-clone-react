import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Request'

const Banner = () => {

    const [movies,setMovies] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const movieData = await axios.get(requests.fetchNetflixOriginals)
            console.log(movieData)
            setMovies(movieData.data.results[ Math.floor(Math.random() * movieData.data.results.length - 1) ])
        }

        fetchData()
    }, [])

    const despTruncate = (string, n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string
    }

    return (
        <header className='banner' style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,backgroundSize:'cover',backgroundPosition:'center center'}}>
            <div className='banner-contents'>
                <h1 className='banner-title'>
                    {movies.title || movies.name || movies.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My list</button>
                </div>
                <h1 className="banner-description">
                    {despTruncate(movies?.overview,100) }
                </h1>
            </div>

            <div className="banner-fadeBottom" />
        </header>
    )
}

export default Banner
