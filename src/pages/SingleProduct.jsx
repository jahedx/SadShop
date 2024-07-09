import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../assets/wrappers/SingleProduct";
import { details } from "../data/Data.jsx";
import ToomanIcon from "./../components/ToomanIcon";
import { data } from "../data/Data.jsx";
import { useState } from "react";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
};

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  var temp;
  const { productID } = useParams();
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == productID) {
      temp = data[i];
      console.log(temp);
    }
  }

  const Carousel = () => (
    <Slider {...settings}>
      {temp.slides.map((slide) => (
        <div style={{ width: "100%" }} key={slide.id}>
          <img src={slide.image} alt={slide.altText} />
        </div>
      ))}
    </Slider>
  );
  // for (var i = 0; i < data.length; i++) {
  //   if (data[i].id === productID) {
  //     product = data[i];
  //     // console.log(product);
  //   }
  // }

  return (
    <Wrapper>
      <div className="page">
        {
          //console.log(product)
        }
        <section className="main-erea">
          <div className="slider-center">
            <div className="images">
              <Carousel className="slider" />
            </div>
          </div>
          <div className="title">
            <h4 dir="rtl">{temp.name}</h4>
          </div>
          <div className="description">
            <p dir="rtl">{temp.description}</p>
          </div>

          <div className="add-to-cart ">
            <button className="btn">افزودن به سبد خرید</button>

            <div className="pricing">
              <p>{temp.sellingPrice}</p>
              <ToomanIcon className="icon" />
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
