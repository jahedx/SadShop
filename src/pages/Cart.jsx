import SingleItem from "../components/CartSingleItem.jsx";
import Wrapper from "../assets/wrappers/Cart.js";
import { cart } from "../data/Data";
const Cart = () => {
  console.log(cart);
  return (
    <Wrapper>
      <div className="section-center">
        <section className="product-list">
          {cart.map((product) => {
            return <SingleItem {...product} key={product.id} />;
          })}
          <div className="single-product"></div>
        </section>
      </div>
    </Wrapper>
  );
};
export default Cart;
