import React from 'react';
import contactosCSS from './Contactos.module.css'
import { Fragment } from 'react'
import placeholder from './placeholder.png'


export default function Cuadricula() {
    
    return (

        <Fragment>
            <div className={contactosCSS.grid}>

                <div>

                <div className={contactosCSS.phones}>
                    
                    <h2 className={contactosCSS.subtitle}> Teléfonos: </h2>

                    <div className={contactosCSS.item}>
                        <img className={contactosCSS.icon} src={placeholder} ></img>
                        <p className={contactosCSS.text}> (58)111 1111111</p>
                    </div>               

                    <div className={contactosCSS.item}>
                        <img className={contactosCSS.icon} src={placeholder} ></img>
                        <p className={contactosCSS.text}> (58)111 1111111</p>
                    </div>  

                </div>

                <div className={contactosCSS.email}>
                    <div>
                        <h2 className={contactosCSS.subtitle}> Correo Electrónico: </h2>
                    
                        <div className={contactosCSS.item}>
                            <img className={contactosCSS.icon} src={placeholder} ></img>
                            <p className={contactosCSS.text}> lorem@ipsum.com </p>
                        </div>

                    </div>
                </div>
                
                <div className={contactosCSS.location}>
                    <div>
                        <h2 className={contactosCSS.subtitle}> Dirección: </h2>

                        <div className={contactosCSS.item}>
                            <img className={contactosCSS.icon} src={placeholder} ></img>
                            <p className={contactosCSS.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, incidunt. </p>
                        </div>


                    </div>
                </div>

                </div>

                <div className={contactosCSS.message}>

                    <h2 className={contactosCSS.title}> Escribenos </h2>
                    
                    <div className={contactosCSS.shortField}>
                        <input className={contactosCSS.input}  placeholder="Nombres"/> 
                    </div>

                    <div className={contactosCSS.shortField} >
                        <input className={contactosCSS.input} placeholder="Apellidos"/> 
                    </div>

                    <div className={contactosCSS.shortField}>
                        <input className={contactosCSS.input}  placeholder="Teléfono"/> 
                    </div>

                    <div className={contactosCSS.shortField}>
                        <input className={contactosCSS.input}  placeholder="Correo electrónico"/> 
                    </div>

                    <div className={contactosCSS.longField}>
                        <input className={contactosCSS.input}  placeholder="Asunto"/> 
                    </div>

                    <div className={contactosCSS.textareaBox}>
                        <textarea className={contactosCSS.textarea}> </textarea>
                    </div>

                    <button className={contactosCSS.submit}> Enviar </button>

                </div>

            </div>  
        </Fragment>
    
    
    );
}