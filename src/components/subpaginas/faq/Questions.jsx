import React from "react";
import { Fragment } from 'react'
import faqCSS from './FAQ.module.css'

export default function Questions(){

    return(

        <Fragment>
            
            <div className={faqCSS.faqGrid}>

            <div className={faqCSS.faqBox}>

            <div className={faqCSS.item}>
                <h2 className={faqCSS.question}> Lorem ipsum dolor sit amet.</h2>
                <p className={faqCSS.answer}> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam recusandae a cum provident molestiae ratione animi nobis 
                    id exercitationem autem repudiandae maxime praesentium temporibus at eius, consequuntur adipisci aut ipsa.
                </p>
            </div>

            <div className={faqCSS.item}>
                <h2 className={faqCSS.question}> Lorem ipsum dolor sit amet.</h2>
                <p className={faqCSS.answer}> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam recusandae a cum provident molestiae ratione animi nobis 
                    id exercitationem autem repudiandae maxime praesentium temporibus at eius, consequuntur adipisci aut ipsa.
                </p>
            </div>

            <div className={faqCSS.item}>
                <h2 className={faqCSS.question}> Lorem ipsum dolor sit amet.</h2>
                <p className={faqCSS.answer}> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam recusandae a cum provident molestiae ratione animi nobis 
                    id exercitationem autem repudiandae maxime praesentium temporibus at eius, consequuntur adipisci aut ipsa.
                </p>
            </div>

            <div className={faqCSS.item}>
                <h2 className={faqCSS.question}> Lorem ipsum dolor sit amet.</h2>
                <p className={faqCSS.answer}> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam recusandae a cum provident molestiae ratione animi nobis 
                    id exercitationem autem repudiandae maxime praesentium temporibus at eius, consequuntur adipisci aut ipsa.
                </p>
            </div>

            </div>


            <div className={faqCSS.askBox}>
                <h2 className={faqCSS.title}> ¿Tienes alguna pregunta? </h2>

                <p className={faqCSS.text}> Puedes contactarnos y con gusto te responderemos lo mas pronto posible </p>

                <button className={faqCSS.btn}> Contactar </button>

            </div>

            </div>


        </Fragment>
    )
}