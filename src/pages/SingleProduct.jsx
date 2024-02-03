import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../assets/wrappers/SingleProduct";
import { details } from "../data/Data.jsx";
import ToomanIcon from "./../components/ToomanIcon";

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
  return (
    <Wrapper>
      <div className="page">
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
            <p>
              <p dir="rtl">{details.description}</p>
            </p>
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
