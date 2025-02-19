import React from 'react'
import Slider from 'react-slick'
//import ava01 from '../../assets/images/ava-1.jpg'
//import ava02 from '../../assets/images/ava-2.jpg'
//import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ]
    }

    return (
        <Slider {...settings}>
            
        </Slider>
    )
}

export default Testimonials
