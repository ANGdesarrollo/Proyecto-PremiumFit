import React, { useState, useEffect } from 'react';
import { ControlledCarousel } from "./inicio/ControlledCarousel";
import { ProductosContainer } from "./productos/ProductosContainer";
import './inicio/inicio.scss';

export const InicioContainer = () => {
    return (
        <>
            <main className="container-fluid general-container">
                <ControlledCarousel/>
                <ProductosContainer/>
            </main>
        </>
    );
};
