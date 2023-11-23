// import Wrapper from "../assets/wrappers/LandingPage.js";

// const Landing = () => {
//   return (
//     <Wrapper>
//       <div className="page"></div>
//     </Wrapper>
//   );
// };
// export default Landing;

// HeroBanner.js
// HeroBanner.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "20px", right: "20px" }}>
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height: "10px",
          background: "gray",
          margin: "0 5px",
          borderRadius: "5px",
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="image1.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="image2.jpg" alt="Slide 2" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default HeroBanner;
