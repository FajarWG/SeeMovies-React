import React, { useState, useEffect } from 'react';
import '../App.css';
import MovieBox from '../MovieBox';
import fetcher from '../utils/fetcher';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=c6a36b80cc4c15edf75aebb21bb21aa9";

function Popular() {

    const [movies, setMovies] = useState([]);
    const getData = async () => {
        const data = await fetcher(API_URL);
        setMovies(data.results);
    }
    console.log(movies)
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {movies.length > 0 ? (
                <div className="container text-center">
                    <div className='text-center fw-bold my-5 fs-2'>Popular</div>
                    {movies.map((movieReq) =>
                        <MovieBox key={movieReq.id} {...movieReq} />)}
                </div>
            ) : (
                <h2>Sorry !! No Movies Found</h2>
            )}
        </div>
    );
}

export default Popular;