import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hero1, Hero2, Hero3 } from "../components";

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
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            margin: "0",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="hero-dots"
        style={{
          width: "30px",
          height: "7px",
          background: "white",
          marginRight: " 5px",
          borderRadius: "5px",
        }}
      ></div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <Hero1 />
      </div>
      <div>
        <Hero2 />
      </div>
      <div>
        <Hero3 />
      </div>
    </Slider>
  );
};
export default HeroBanner;
