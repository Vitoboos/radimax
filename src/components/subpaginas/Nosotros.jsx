import React from 'react';

import { Fragment } from 'react'
import NavBar from '../NavBar';
import Cuadricula from './nosotros/Cuadricula';
import Slider from './nosotros/Slider';


export default function Nosotros() {
    
    return (

        <Fragment>

            <NavBar/>

            <Slider/>

            <Cuadricula/>

        </Fragment>
    
    
    );
}