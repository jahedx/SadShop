import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../assets/wrappers/SingleProduct";
import { details } from "../data/Data.jsx";
import ToomanIcon from "./../components/ToomanIcon";
import { data } from "../data/Data.jsx";
import { useEffect } from "react";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
};

const Carousel = () => (
  <Slider {...settings}>
    {details.slides.map((slide) => (
      <div style={{ width: "100%" }} key={slide.id}>
        <img src={slide.image} alt={slide.altText} />
      </div>
    ))}
  </Slider>
);
const SingleProduct = () => {
  const { productID } = useParams();
  for (i = 0; i < data.length; i++) {
    if (data[i].id == productID) {
      console.log(data[i]);
    }

    var product;
  }

  for (var i = 0; i < data.length; i++) {
    if (data[i].id === productID) {
      product = data[i];
      console.log(product);
    }
  }

  return (
    <Wrapper>
      <div className="page">
        {console.log(product)}
        <section className="main-erea">
          <div className="slider-center">
            <div className="images">
              <Carousel className="slider" />
            </div>
          </div>
          <div className="title">
            <h4 dir="rtl">{details.title}</h4>
          </div>
          <div className="description">
            <p dir="rtl">{details.description}</p>
          </div>

          <div className="add-to-cart ">
            <button className="btn">افزودن به سبد خرید</button>

            <div className="pricing">
              <p>{details.price}</p>
              <ToomanIcon className="icon" />
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
