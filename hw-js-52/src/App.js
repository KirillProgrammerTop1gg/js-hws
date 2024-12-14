import './App.css';
import { useState, useEffect } from 'react';
import Movies from './Components/Movies/Movies';
import Header from './Components/Header/Header';
import Movie from './Components/Movie/Movie';
import Home from './Components/Home/Home';
import Cast from './Components/Cast/Cast';
import Review from './Components/Review/Review';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />}/>
        <Route path='/movies/:movieId' element={<Movie />}>
          <Route path='Review' element={<Review />}/>
          <Route path='Cast' element={<Cast />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
