import { useEffect, useState } from "react";

import { get } from "../modules/axiosService.js";
import ProductCard from "./../components/ProductCard";
import { useNavigate } from "react-router-dom";
const SearchResult = () => {
  const navigate = useNavigate();

  const handleProductClick = (productID) => {
    navigate(`/product/${productID}`);
  };

  const [list, setList] = useState(null);
  useEffect(
    () => async () => {
      try {
        const result = await get("/api/unknown");
        console.log("Get response: ", result);
        setList(result);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    },
    []
  );

  return (
    <div>
      {list.map((card) => {
        return (
          <div key={card.id}>
            <ProductCard
              {...card}
              navigator={() => handleProductClick(card.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
export default SearchResult;
