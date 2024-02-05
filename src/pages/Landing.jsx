import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../assets/wrappers/LandingPage.js";
import {
  ProductCard,
  SliderCard,
  AmazingImage,
  HeroBanner,
} from "../components";

import { useGlobalContext } from "../context.jsx";
import { useEffect } from "react";
import { get } from "../modules/axiosService.js";

const LandingPage = () => {
  useEffect(() => async () => {
    try {
      const list1 = await get("/api/unknown");
      console.log("Get response: ", list1);
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  });

  const { defaultData } = useGlobalContext();
  const cards = defaultData;
  SliderCard.cards = cards;
  return (
    <Wrapper>
      <div className="page">
        <div className="slider">
          <HeroBanner />
        </div>

        <div className="section-divider"></div>
        <section className="laptop-suggest">
          <div className="cards-container">
            {cards.map((card) => {
              return <ProductCard {...card} key={card.id} />;
            })}
          </div>
        </section>
        <section className="amazings">
          <SliderCard cardsList={cards} />
          <div className="amazings-image">
            <AmazingImage className="image" />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default LandingPage;
