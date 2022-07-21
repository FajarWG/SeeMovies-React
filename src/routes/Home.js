import React from 'react';
import AuthenticatedUser from '../components/AuthenticatedUser';
import Slider from '../components/Slider';
import { UserProvider} from './context/User';

const Home = () => {
  
    const api_now = "https://api.themoviedb.org/3/movie/now_playing?api_key=c6a36b80cc4c15edf75aebb21bb21aa9";
    const api_upcoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=c6a36b80cc4c15edf75aebb21bb21aa9";
    const api_popular = "https://api.themoviedb.org/3/movie/popular?api_key=c6a36b80cc4c15edf75aebb21bb21aa9";

    return (
      <>
      <div className='container'>
        <UserProvider>
          <AuthenticatedUser />
        </UserProvider>
        <div className='text-center fw-bold my-5 fs-2'>Welcome To SeeMovies</div>
        <div className='fw-bold my-2 fs-3'>Now Playing</div>
          <Slider api={api_now} />
        <div className='fw-bold my-2 fs-3'>Upcoming</div>
          <Slider api={api_upcoming} />
        <div className='fw-bold my-2 fs-3'>Popular</div>
          <Slider api={api_popular} />
      </div>   
      </>
     
    );
  }
export default Home