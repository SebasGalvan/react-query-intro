import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderImagenes.css'

const SliderComponent = () => {
    const photos = [
        'public/images/1.jpg',
        'public/images/2.jpg',
        'public/images/3.jpg',
        'public/images/4.jpg',
        'public/images/5.jpg',
      ];
    

  const PrevArrow = (props) => {
    return (
      <button {...props} className="slick-arrow slick-prev">
  
      </button>
    );
  };

  const NextArrow = (props) => {
    return (
      <button {...props} className="slick-arrow slick-next">

      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
             <img src={photo} alt={`Slide ${index}`} className='imagen'/>
          </div>
        ))}
      </Slider>
    </div>
  );
};



export default SliderComponent;