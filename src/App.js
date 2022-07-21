import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './routes/Home';
import Layout from './components/Layout';
import Search from './routes/Search';
import NotFound from './routes/error/NotFound';
import About from './routes/About';
import Login from './routes/auth/Login';
import Register from './routes/auth/Register';

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
   
  );
}

export default App;
