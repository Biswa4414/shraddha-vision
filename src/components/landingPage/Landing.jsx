import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/img-1.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";
import img7 from "../images/img-7.jpg";
import img8 from "../images/img-8.jpg";
import img9 from "../images/img-9.jpg";
import img2 from "../images/img-2.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../landingPage/landing.css";
const LandingPage = () => {
  return (
    <div className="home-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className="carousel-container"
      >
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={img9} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={img6} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={img7} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={img8} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={img3} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={img5} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={img4} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img1} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <img src={img2} alt="" />
    </div>
  );
};

export default LandingPage;
