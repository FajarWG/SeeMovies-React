import React from 'react';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ titel, poster_path, vote_average, release_date, overview }) => {

    return (
        <img alt={titel} className="poster-img" src={API_IMG + poster_path} />
    )
}

export default MovieBox;