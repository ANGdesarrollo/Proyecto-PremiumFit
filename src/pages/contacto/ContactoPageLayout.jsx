import React, { useState, useEffect } from 'react';
import IconoImg0 from '../../assets/icons/nuez.png';
import IconoImg1 from '../../assets/icons/almendra.png';
import IconoImg2 from '../../assets/icons/nueces.png';
import IconoImg3 from '../../assets/icons/frutas-secas.png';

export const ContactoPageLayout = ( { register, validateEmail, errors, handleSubmit, onSubmit } ) => {
    return (
        <section className="container-contact-page">
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"{ ...register( "email", {
                        required: true,
                        pattern: validateEmail
                    } ) }/>
                    { errors.email?.type === 'required' && <p>Este campo es requerido</p> }
                    { errors.email?.type === 'pattern' && <p>Email invalido</p> }
                </div>
                <div>
                    <label htmlFor="asunto">Asunto</label>
                    <input id="asunto" type="text" { ...register( "asunto", {
                        required: true
                    } ) }/>
                    { errors.asunto?.type === 'required' && <p>Este campo es requerido</p> }
                </div>
                <div>
                    <label htmlFor="consulta">Tu consulta</label>
                    <textarea id="consulta" type="text" {...register("consulta", {
                        required: true
                    })}/>
                    { errors.consulta?.type === 'required' && <p>Este campo es requerido</p> }
                </div>
                <button type="submit">Enviar</button>
            </form>
            <div className="agradecimiento">
                <p>
                    <span>Le responderemos a la brevedad</span>
                    <span>¡Gracias!</span>
                </p>
            </div>

            <div className='iconosContacto'>
                <div><img src={IconoImg0} alt="icono nuez"/></div>
                <div><img src={IconoImg1} alt="icono nuez"/></div>
                <div> <img src={IconoImg2} alt="icono nuez"/></div>
                <div><img src={IconoImg3} alt="icono nuez"/></div>



            </div>
        </section>
    );
};
