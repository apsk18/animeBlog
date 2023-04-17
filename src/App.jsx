import React from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog/:id" element={<Blog/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

