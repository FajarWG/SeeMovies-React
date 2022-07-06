import React,{useState,useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import fetcher from './utils/fetcher';

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=c6a36b80cc4c15edf75aebb21bb21aa9";
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=c6a36b80cc4c15edf75aebb21bb21aa9&query=';


function App() {

  const [search, setSearch] = useState([]);
  const [movies, setMovies] = useState([]);
  
  const getData = async () => {
    const data = await fetcher(API_URL);
    setMovies(data.results);
  }
  
  const searchMov = async (search) => {
    const data = await fetcher(SEARCH_URL+search);
    setSearch(data.results);
  }
  
    useEffect(() => {
        getData();
        searchMov();
    }, [])

  return (
    <>
    <div>
      {movies.length > 0 ?(
        <div className="container text-center">
          <div className='text-center fw-bold my-5 fs-2'>Welcome To SeeMovies</div>
          <form className='m-5' id="form" name="form">
            <input type="text" placeholder="Search Movies" name="search" id="search" className="search" onChange={(e) => setSearch(e.target.value)} />
          </form>
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
    </>
   
  );
}

export default App;
