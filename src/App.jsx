import { useEffect } from 'react'
import './App.scss';
import Home from "./pages/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Router from './Router/Router';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      {/* <Home /> */}
      <Router />
    </>
  )
}

export default App
