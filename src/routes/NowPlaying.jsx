import React, { useState, useEffect } from 'react';
import '../App.css';
import MovieBox from '../MovieBox';
import Navbar from '../components/Navbar';

const API_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=c6a36b80cc4c15edf75aebb21bb21aa9";

function NowPlaying() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results);
            })
    }, [])

    return (
        <>
            <Navbar />
            <div>
                {movies.length > 0 ? (
                    <div className="container text-center">
                        <div className='text-center fw-bold my-5 fs-2'>Now Playing</div>
                        {movies.map((movieReq) =>
                            <MovieBox key={movieReq.id} {...movieReq} />)}
                    </div>
                ) : (
                    <h2>Sorry !! No Movies Found</h2>
                )}
            </div>
        </>

    );
}

export default NowPlaying;