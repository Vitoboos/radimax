import React from 'react';
import nosotrosCSS from './Nosotros.module.css'
import { Fragment } from 'react'
import placeholder from './placeholder.png'


export default function Cuadricula() {
    
    return (

        <Fragment>
            
            <div className={nosotrosCSS.grid}>

                <div className={nosotrosCSS.mainText}>
                    <p> 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Quae tempora id temporibus, voluptas doloribus alias 
                        exercitationem mollitia iure eum nesciunt fugiat odio eaque a distinctio corporis culpa hic iusto! Culpa.
                    </p>
                </div>

                <div className={nosotrosCSS.container}>
                    <h1 className={nosotrosCSS.subtitle}> Historia </h1>
                    <p className={nosotrosCSS.text}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, delectus. 
                        Ipsum exercitationem veritatis dicta explicabo assumenda quod mollitia sed repellendus.
                    </p>
                </div>
                
                <div className={nosotrosCSS.imageContainer}>
                    <img className={nosotrosCSS.gridImage} src={placeholder} ></img>
                </div>

                <div className={nosotrosCSS.imageContainer}>
                    <img className={nosotrosCSS.gridImage} src={placeholder} ></img>
                </div>

                <div className={nosotrosCSS.container}>
                    <h1 className={nosotrosCSS.subtitle}> Nuestro Compromiso </h1>
                    <p className={nosotrosCSS.text}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, delectus. 
                        Ipsum exercitationem veritatis dicta explicabo assumenda quod mollitia sed repellendus.
                    </p>
                </div>

                <div className={nosotrosCSS.gridSeparator}>
                    <h1> Nuestra filosofía </h1>
                </div>

                <div className={nosotrosCSS.bottomContainer}>
                    <h1 className={nosotrosCSS.subtitle}> Misión </h1>
                    <p className={nosotrosCSS.text}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, delectus. 
                        Ipsum exercitationem veritatis dicta explicabo assumenda quod mollitia sed repellendus.
                    </p>
                </div>

                <div className={nosotrosCSS.bottomContainer}>
                    <h1 className={nosotrosCSS.subtitle}> Visión </h1>
                    <p className={nosotrosCSS.text}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, delectus. 
                        Ipsum exercitationem veritatis dicta explicabo assumenda quod mollitia sed repellendus.
                    </p>
                </div>


            </div>

        </Fragment>
    
    
    );
}