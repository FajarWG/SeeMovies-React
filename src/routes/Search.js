import React,{useState, useEffect} from "react";
import axios from "axios";
import Poster from "../components/Poster";

const Search = (props) => {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const getMovies = async () => { 
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c6a36b80cc4c15edf75aebb21bb21aa9&query=${search}`);
            setMovies(response.data.results);
            // console.log(response.data.results);
        } catch(e){
            console.log(e.message);
        }

    }

    useEffect(() => {
        getMovies();
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    

    return (
        <div className="container text-center">
            <div >
                <div className='text-center fw-bold my-5 fs-2'>Search Movies</div>
                <input type="text" placeholder="Search Movies" name="search" id="search" className="search mb-3" onChange={(e) => setSearch(e.target.value)} />
            </div>
            {movies.length > 0 ? (
                <div>
                    {movies.map((movieReq) => (
                        <Poster key={movieReq.id} {...movieReq} />
                    ))}
                </div>
            ) : (
                <h4>...</h4>
            )}
        </div>
    )

}

export default Search;