import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MovieList from './components/Movielist/Movielist'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <MovieList/>
      <Footer/>
    </>
  )
}

export default App
