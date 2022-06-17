import React from "react";
import { Fragment } from 'react'
import logo from './placeholder.png'
import doubleArrows from './doublearrow.svg'

export default function Services(){

    return(

        <Fragment>  

        <h1 className="serviceTitle"> Servicios </h1>

        <div className="serviceBox">

            <div className="serviceItem">

                <h2 className="subTitle"> Servicio 1 </h2> 

                <img className="logo" src={logo} width="100px" height="50px" ></img>
                
                <p className="serviceText"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis minus, nam odit itaque
                    reprehenderit doloremque reiciendis corrupti et. Dolore?
                </p>

            </div>

            <div className="serviceItem">

            <h2 className="subTitle"> Servicio 2 </h2> 

            <img className="logo" src={logo} width="100px" height="50px" ></img>

            <p className="serviceText"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis minus, nam odit itaque
                reprehenderit doloremque reiciendis corrupti et. Dolore?
            </p>

            </div>

            <div className="serviceItem">

            <h2 className="subTitle"> Servicio 3 </h2> 

            <img className="logo" src={logo} width="100px" height="50px" ></img>

            <p className="serviceText"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis minus, nam odit itaque
                reprehenderit doloremque reiciendis corrupti et. Dolore?
            </p>

            </div>

        </div>
        
        <button className="serviceBtn"> Saber más </button> 

        <img className="doubleArrows" src={doubleArrows} ></img>



        </Fragment>

    )

}