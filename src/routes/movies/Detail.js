import React, {useState, useEffect} from "react";
import axios from "axios";

function Detail() {
    
    const [detail, setDetail] = useState([]);

    // Detail is the movie id
    const getDetail = async () => {
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=c6a36b80cc4c15edf75aebb21bb21aa9`);
            setDetail(response.data);
        } catch(e){
            console.log(e.message);
        }
    }

    useEffect(() => {
        getDetail();
    }
    , [props.match.params.id])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt="poster" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h2>{detail.title}</h2>
                    <p>{detail.overview}</p>
                    <p>{detail.release_date}</p>
                </div>
            </div>
        </div>
    )
    
   

}

export default Detail;