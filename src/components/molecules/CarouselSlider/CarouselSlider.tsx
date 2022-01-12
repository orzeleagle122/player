import React from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container, Carousel} from "./CarouselSlider.elements";
import {VideoCart} from "../../index";
//TODO: add props to VideoCart


const CarouselSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true
    };
    return (
        <Container>
            <h2>Recommended for You</h2>
            <Carousel {...settings}>
                {/*<VideoCart/>*/}
                {/*<VideoCart/>*/}
                {/*<VideoCart/>*/}
                {/*<VideoCart/>*/}
                {/*<VideoCart/>*/}
                {/*<VideoCart/>*/}
                {/*<VideoCart/>*/}

            </Carousel>
        </Container>
    );
};

export default CarouselSlider;