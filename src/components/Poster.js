import React from "react";

function Poster({title, poster_path}) {
    return (
        <img alt={title} className="poster-img" src={"https://image.tmdb.org/t/p/w500/" + poster_path} />
    )
}

export default Poster;