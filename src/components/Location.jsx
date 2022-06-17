import React from "react";
import { Fragment } from 'react'
import logo from './placeholder.png'


export default function Location(){

    return(

        <Fragment>

        <div className="locationBox">

            <h1 className="subtitle"> Encuentranos </h1>

            <img className="locationImg" src={logo} ></img>

            <button className="contactBtn"> Contactanos </button> 


        </div>

        </Fragment>


    )
}
