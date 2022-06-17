import React from "react";
import { Fragment } from 'react'
import logo from './placeholder.png'
import contactosCSS from './Contactos.module.css'

export default function Location(){

    return(

        <Fragment>

        <div className={contactosCSS.mapBox}>

            <img className={contactosCSS.mapImage} src={logo} ></img>

        </div>

        </Fragment>


    )
}
