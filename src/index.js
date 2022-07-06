import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Popular from './routes/Popular'
import TopMovies from './routes/TopMovies'
import Upcoming from './routes/Upcoming'
import NowPlaying from './routes/NowPlaying'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Popular" element={<Popular />} />
      <Route path="/NowPlaying" element={<NowPlaying />} />
      <Route path="/TopMovies" element={<TopMovies />} />
      <Route path="/Upcoming" element={<Upcoming />} />
    </Routes>
  </BrowserRouter>
);
