import Slider from "react-slick";
import Wrapper from "../assets/wrappers/SliderCard.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard.jsx";

const SliderCard = ({ cardsList }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
    prevArrow: <div className="slick-prev">Previous</div>,
    nextArrow: <div className="slick-next">Next</div>,
  };
  return (
    <Wrapper>
      <div className="slider-container">
        <Slider {...settings}>
          {cardsList.map((card) => {
            return (
              <div className="card" key={card.id}>
                <ProductCard {...card} key={card.id} />
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};
export default SliderCard;
