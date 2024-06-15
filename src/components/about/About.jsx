import React from "react";
import Header from "../common/header/Header";
import "../about/about.css";
import Footer from "../common/footer/Footer";

const About = () => {
  const backgroundImg = {
    backgroundColor: "black",
  };
  return (
    <div style={backgroundImg}>
      <Header />
      <div className="top">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/2207894/pexels-photo-2207894.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://images.pexels.com/photos/7235672/pexels-photo-7235672.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="card card-3">
          <img
            className="card3"
            src="https://images.pexels.com/photos/4239017/pexels-photo-4239017.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className="about-container">
        <div className="photo">
          {/* Your photo here */}
          <img
            src="https://your-photo-url.jpg"
            alt="Your Photo"
          />
        </div>
        <div className="about">
          <p>
            As an interior designer, I brings a unique blend of
            creativity, vision, and meticulous attention to detail to every
            project she undertakes. With a passion for transforming spaces into
            captivating and functional environments, Shraddha combines her
            expertise in interior design with a keen understanding of her clients'
            needs and aspirations. Shraddha's journey in the world of design began
            with a deep-seated fascination for art and architecture, which she
            cultivated through formal education and hands-on experience. Armed
            with a degree in Interior Design from a prestigious institution, she
            embarked on a mission to redefine the concept of interior spaces. Her
            design philosophy revolves around creating spaces that not only
            reflect the personality and style of her clients but also enhance
            their overall well-being. From residential homes to commercial
            establishments, Shraddha approaches each project with enthusiasm and
            dedication, ensuring that every detail is thoughtfully curated to
            achieve harmony and balance. With a keen eye for aesthetics and a
            commitment to excellence, Shraddha Agrawal continues to push the
            boundaries of design, leaving her mark on the world one space at a
            time.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
