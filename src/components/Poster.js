import React from "react";

function Poster({title, poster_path}) {

    const sendToWatchlist = () => {
        console.log("send to watchlist");
    }

    return (
        <div>
            <img alt={title} className="poster-img" src={"https://image.tmdb.org/t/p/w500/" + poster_path} />
            {/* <button className="add-poster" onClick={() => sendToWatchlist}>Add to watchlist</button> */}
        </div>
        
    )
}

export default Poster;