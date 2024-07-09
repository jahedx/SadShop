import SingleItem from "../components/CartSingleItem.jsx";
import Wrapper from "../assets/wrappers/Cart.js";
import { useGlobalContext } from "../context.jsx";
import { useEffect, useState } from "react";
import { get } from "../modules/axiosService.js";

const Cart = () => {
  useEffect(
    () => async () => {
      try {
        const result = await get("/api/unknown");
        console.log("Get response: ", result);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    },
    []
  );
  const { defaultCart, setDefaultCart } = useGlobalContext();

  const cartTotal = defaultCart.reduce((total, item) => {
    total += item.cost;
    return total;
  }, 0);

  const [total, setTotal] = useState(cartTotal);

  return (
    <Wrapper>
      <div className="section-center">
        <section className="product-list">
          {defaultCart.map((product) => {
            console.log(total);
            return <SingleItem {...product} key={product.id} />;
          })}
        </section>

        <section className="check-out">
          <button className="btn order-btn">تایید و تکمیل سفارش</button>
        </section>
      </div>
    </Wrapper>
  );
};
export default Cart;
