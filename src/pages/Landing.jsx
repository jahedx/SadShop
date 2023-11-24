import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../assets/wrappers/LandingPage.js";
import ProductCard from "../components/ProductCard.jsx";
import { Hero1, Hero2, Hero3 } from "../components";

const card = {
  img: "https://images.timcheh.com/1/fill/350/350/sm/true/plain/https://static.timcheh.com/uploads/product-image/68/b7/b7/38/73/media-6187d6785488c.jpg",
  name: "لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506LH-B",
  sellingPrice: 37500000,
  offPercent: "0%",
  reaPrice: "",
};

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
        className="hero-dots"
        style={{
          width: "30px",
          height: "4px",
          background: "#d1d1d1",
          marginRight: " 5px",
          borderRadius: "5px",
        }}
      ></div>
    ),
  };

  return (
    <Wrapper>
      <div className="page">
        <div className="slider">
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
        </div>
      </div>
      <div className="section-divider"></div>
      <section className="laptop-suggest">
        <div className="cards-container">
          <ProductCard
            img={card.img}
            name={card.name}
            sellingPrice={card.sellingPrice}
            offPercent={card.offPercent}
            reaPrice={card.reaPrice}
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default HeroBanner;
