import React from 'react';
import { Fragment } from 'react'
import NavBar from '../NavBar';
import Slider from './contactos/Slider';
import Cuadricula from './contactos/Contactos';
import Location from './contactos/Location';


export default function Contactos() {
    
    return (

        <Fragment>

            <NavBar/>

            <Slider/>

            <Cuadricula/>   

            <Location/>

        </Fragment>
    
    
    );
}