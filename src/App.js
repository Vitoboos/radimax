import './App.css';
import {Route, Router} from 'react-router-dom'

import { Fragment } from 'react'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import About from './components/About'
import Services from './components/Services'
import Location from './components/Location'


function App() {
  return (

    <Fragment>

      <NavBar /> 

      <Slider/>

      <About/>

      <Services/>

      <Location/>

    </Fragment>

    
  );
}

export default App;
