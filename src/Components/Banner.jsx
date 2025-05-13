import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner1 from "../assets/Banner Img/Banner1.jpg";
import Banner2 from "../assets/Banner Img/Banner2.jpg";
import Banner3 from "../assets/Banner Img/Banner3.jpg";
import Banner4 from "../assets/Banner Img/Banner4.jpg";
import '../Styles/Banner.css';

const Banner = () => {
  return (
    <Carousel pause={false} data-aos="fade-down">
      <Carousel.Item interval={5000}>
        <div className="carousel-image-wrapper">
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <div className="black-overlay"></div>
        </div>
        <Carousel.Caption>
          <h3>Wander Far, Discover More — Travelinds Awaits.</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="carousel-image-wrapper">
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
          <div className="black-overlay"></div>
        </div>
        <Carousel.Caption>
          <h3>Your Journey Begins Here — Explore with Travelinds.</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <div className="carousel-image-wrapper">
          <img className="d-block w-100" src={Banner3} alt="Third slide" />
          <div className="black-overlay"></div>
        </div>
        <Carousel.Caption>
          <h3>Crafting Unforgettable Adventures — Only at Travelinds.</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <div className="carousel-image-wrapper">
          <img className="d-block w-100" src={Banner4} alt="fourth slide" />
          <div className="black-overlay"></div>
        </div>
        <Carousel.Caption>
          <h3>See the World, Feel Alive — Travel with Travelinds.</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
