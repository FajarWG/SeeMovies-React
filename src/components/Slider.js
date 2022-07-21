import React,{useState,useEffect} from 'react';
import Poster from '../components/Poster';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import {Autoplay} from 'swiper';
import fetcher from '../utils/fetcher';

const Slider = ({api}) => {
    const [movies, setMovies] = useState([]);
    
    const getData = async () => {
        const data = await fetcher(api);
        setMovies(data.results);
    }

      useEffect(() => {
          getData(); // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  return (
    <div>
    <Swiper
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        navigation={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {movies.length > 0 ?(
          <div className="container text-center">
            {movies.map((movieReq)=>
              <SwiperSlide key={movieReq.id}>
                <Poster {...movieReq} />
              </SwiperSlide>)}
      </div>
        ):(
          <h2>Loading...</h2>
        )}
        
      </Swiper>
    </div>
  )
}

export default Slider