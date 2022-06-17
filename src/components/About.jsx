import React from "react";
import { Fragment } from 'react'
import logo from './placeholder.png'
import doubleArrows from './doublearrow.svg'

export default function About(){

    return(

        <Fragment>

        <div className="aboutBox">

            <h1 className="subTitle"> Sobre Nosotros </h1>

            <p className="aboutText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates dolor enim, fugit amet voluptate ratione quam obcaecati facilis dolores 
                modi laudantium sunt neque nam eum hic, libero similique. Id, dolore! 
            </p>

            <button className="moreBtn"> Saber más </button> 

        </div>

        <img className="doubleArrows" src={doubleArrows} ></img>

        </Fragment>


    )
}
