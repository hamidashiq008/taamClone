import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss';
import Home from "./pages/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Router from './Router/Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <Router/>
    </>
  )
}

export default App
