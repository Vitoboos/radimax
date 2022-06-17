import React from 'react';
import serviciosCSS from './Servicios.module.css'
import { Fragment } from 'react'
import placeholder from './placeholder.png'


export default function Cuadricula() {
    
    return (

        <Fragment>

            <div className={serviciosCSS.upperGrid}>

                <h1 className={serviciosCSS.title}> Intraorales </h1>

                <div className={serviciosCSS.item}>
                    <h2 className={serviciosCSS.subtitle}> Periapicales </h2>
                    <img className={serviciosCSS.gridImage} src={placeholder} ></img>
                    <p className={serviciosCSS.text}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sunt aliquid recusandae 
                        excepturi vero hic labore, eius porro distinctio impedit?
                    </p>
                </div>

                <div className={serviciosCSS.item}>
                    <h2 className={serviciosCSS.subtitle}> Oclusales </h2>
                    <img className={serviciosCSS.gridImage} src={placeholder} ></img>
                    <p className={serviciosCSS.text}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sunt aliquid recusandae 
                        excepturi vero hic labore, eius porro distinctio impedit?
                    </p>
                </div>

                <div className={serviciosCSS.item}>
                    <h2 className={serviciosCSS.subtitle}> Coronales </h2>
                    <img className={serviciosCSS.gridImage} src={placeholder} ></img>
                    <p className={serviciosCSS.text}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sunt aliquid recusandae 
                        excepturi vero hic labore, eius porro distinctio impedit?
                    </p>
                </div>

            </div>
            

            <div className={serviciosCSS.bottomGrid}>

                <h1 className={serviciosCSS.title}> Extraorales </h1>

                <div className={serviciosCSS.item}>
                    <h2 className={serviciosCSS.subtitle}> Panoramicas </h2>
                    <img className={serviciosCSS.gridImage} src={placeholder} ></img>
                    <p className={serviciosCSS.text}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sunt aliquid recusandae 
                        excepturi vero hic labore, eius porro distinctio impedit?
                    </p>
                </div>

                <div className={serviciosCSS.item}>
                    <h2 className={serviciosCSS.subtitle}> Frontales (Postero Anterior) </h2>
                    <img className={serviciosCSS.gridImage} src={placeholder} ></img>
                    <p className={serviciosCSS.text}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sunt aliquid recusandae 
                        excepturi vero hic labore, eius porro distinctio impedit?
                    </p>
                </div>

                <div className={serviciosCSS.item}>
                    <h2 className={serviciosCSS.subtitle}> Cefalicas Laterales  </h2>
                    <img className={serviciosCSS.gridImage} src={placeholder} ></img>
                    <p className={serviciosCSS.text}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sunt aliquid recusandae 
                        excepturi vero hic labore, eius porro distinctio impedit?
                    </p>
                </div>

                <div className={serviciosCSS.item}>
                    <h2 className={serviciosCSS.subtitle}> ATM (Articulación Temporo Mandibular) </h2>
                    <img className={serviciosCSS.gridImage} src={placeholder} ></img>
                    <p className={serviciosCSS.text}> 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum sunt aliquid recusandae 
                        excepturi vero hic labore, eius porro distinctio impedit?
                    </p>
                </div>

            </div>


        </Fragment>
    
    );
}