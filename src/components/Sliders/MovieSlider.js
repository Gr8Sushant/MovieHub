
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import '../simpleslider.css';


const photos = [
  {
    name: 'photo 1',
    url: './images/avbanner.jpg'
  },
  {
    name: 'photo 2',
    url: './images/avengers_banner.jpg'
  },
  {
    name: 'photo 3',
    url: './images/titanicbanner.jpg'
  },
  {
    name: 'photo 4',
    url: './images/shawshankbanner.jpg'
  },
  {
    name: 'photo 4',
    url: './images/forrestbanner.jpg'
  },
  {
    name: 'photo 4',
    url: './images/godfatherbanner.jpg'
  },

]


export default class MovieSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <div className="main">
        <Slider {...settings}>
          {photos.map((photo) => {
            return(
              <div>
                <img className="slider-image" src = {photo.url}/>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}