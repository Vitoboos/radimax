import React from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { Fragment } from 'react'
import logo from './placeholder.png'

export default function NavBar(){

    return(

        <Fragment>

        <img className="logo" src={logo} width="100px" height="50px" ></img>

        <ul className="navList">

        <Link to={"/inicio"}>
            <li className="item"> Inicio </li>
        </Link>

        <Link to={"/nosotros"}>
            <li className="item"> ¿Quienes Somos? </li>
        </Link>

        <Link to={"/servicios"}>
            <li className="item"> Servicios </li>
        </Link>
        
        <Link to={"/contactos"}>
            <li className="item"> Contactos </li>
        </Link>

        <Link to={"/faq"}>
            <li className="item"> Ayuda </li>
        </Link>


        </ul>

        </Fragment>


    )
}

