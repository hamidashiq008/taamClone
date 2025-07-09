import { useState, useEffect } from 'react' 
import './App.scss';
import Home from "./pages/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Router from './Router/Router';
 

function App() { 

  return (
    <>
      {/* <Home /> */}
      <Router />
    </>
  )
}

export default App
