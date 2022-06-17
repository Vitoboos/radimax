import React from 'react';
import { Fragment } from 'react'
import NavBar from '../NavBar';
import Ask from './faq/Ask';
import Questions from './faq/Questions';
import Slider from './faq/Slider';


export default function FAQ() {
    
    return (

        <Fragment>

            <NavBar/>

            <Slider/>

            <Questions/>

            <Ask/>
        
        </Fragment>
    
    
    );
}