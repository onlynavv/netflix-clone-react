import React from 'react'
import Banner from './Banner'
import './home.css'
import MovieRow from './MovieRow'
import Navbar from './Navbar'
import requests from './Request'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />

            <Banner />

            <MovieRow title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
            <MovieRow title='Top Rated' fetchURL={requests.fetchTopRated} />
            <MovieRow title='Action Movies' fetchURL={requests.fetchActionMovies} />
            <MovieRow title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
            <MovieRow title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
            <MovieRow title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
            <MovieRow title='Documentaries' fetchURL={requests.fetchDocumentaries} />
        </div>
    )
}

export default Home
