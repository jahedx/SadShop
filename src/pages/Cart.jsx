import SingleItem from "../components/CartSingleItem.jsx";
import Wrapper from "../assets/wrappers/Cart.js";
import { useGlobalContext } from "../context.jsx";
const Cart = () => {
  const { defaultCart, setDefaultCart } = useGlobalContext();
  return (
    <Wrapper>
      <div className="section-center">
        <section className="product-list">
          {defaultCart.map((product) => {
            return <SingleItem {...product} key={product.id} />;
          })}
          <div className="single-product"></div>
        </section>
      </div>
    </Wrapper>
  );
};
export default Cart;
