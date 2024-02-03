import SingleItem from "../components/CartSingleItem.jsx";
import Wrapper from "../assets/wrappers/Cart.js";
import { useGlobalContext } from "../context.jsx";
import { useState } from "react";

const Cart = () => {
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
          <span>قیمت کالا ها</span>
          <span>جمع سبد خرید {total} </span>
          <span>سود خرید</span>
          <button className="btn order-btn">تایید و تکمیل سفارش</button>
        </section>
        <button
          onClick={() => {
            console.log(defaultCart);
          }}
        >
          check value
        </button>
      </div>
    </Wrapper>
  );
};
export default Cart;
