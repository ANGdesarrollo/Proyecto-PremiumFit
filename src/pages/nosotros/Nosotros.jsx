import React, { useState, useEffect } from 'react';
import './_nosotros.scss'
import Icono from '../../assets/icons/nuez.png'
import Background
    from '../../assets/seamless-pattern-of-black-and-white-nuts-repeat-background-with-isolated-monochrome-hazel-nut-walnut-pistachio-cashew-food-texture-in-cart.jpg';

export const Nosotros = () => {
    return (
        <main className="general-container" id="nosotros-container">
            <div style={ { backgroundImage: `url(${ Background })` } } className="container container-nosotros ">
                <div className="primero">
                    <div className="container-bandera">
                        <p className="text-light">Premium FIT</p>
                        <div className="container-icono"><img src={ Icono } alt="Nuez"/></div>
                    </div>
                    <div className="sobre-nosotros"><h2>SOBRE NOSOTROS</h2></div>
                </div>
                <div className="segundo container">
                    <div>
                        <p>Premium Fit es una tienda en línea de alimentos saludables en Argentina. Ofrecemos una amplia
                            variedad de productos de alta calidad, desde frutos secos hasta snacks y suplementos
                            alimenticios. Trabajamos con proveedores locales y nos enorgullece apoyar a la economía
                            regional. En Premium Fit, nos esforzamos por ofrecer una experiencia de compra fácil y sin
                            complicaciones, y nuestro equipo de atención al cliente está siempre a tu disposición.
                            ¡Gracias
                            por elegir Premium Fit para tus necesidades de alimentación saludable!</p>
                    </div>
                </div>
            </div>
        </main>
    );
};
