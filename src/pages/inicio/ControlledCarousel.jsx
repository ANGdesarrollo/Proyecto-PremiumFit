import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from '../../assets/carousel/slider0.png';
import SecondSlide from '../../assets/carousel/slider1.png';
import ThirdSlide from '../../assets/carousel/slider2.jpg';
import './inicio.scss';

export const ControlledCarousel = () => {
    const [ index, setIndex ] = useState( 0 );

    const handleSelect = ( selectedIndex, e ) => {
        setIndex( selectedIndex );
    };

    return (
        <Carousel activeIndex={ index } onSelect={ handleSelect }>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={ FirstSlide }
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={ SecondSlide }
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src={ ThirdSlide }
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
