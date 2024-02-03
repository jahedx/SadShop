import Wrapper from "../assets/wrappers/CartSingleItem.js";
import ToomanIcon from "./ToomanIcon";
import ToomanRedIcon from "./ToomanRedIcon.jsx";
import { useGlobalContext } from "../context.jsx";
import { useState } from "react";
import Product from "./../pages/Product";

const CartSingleItem = (props) => {
  const { defaultCart, setDefaultCart } = useGlobalContext();
  // var { id, img, count, price, discount, title, color, guarantee } = props;
  const [product, setProduct] = useState(props);

  return (
    <Wrapper>
      <div className="container">
        <p>{product.count} کالا</p>
        <div className="main-description">
          <img
            src={product.img}
            alt={product.title}
            className="product-image"
          />
          <div className="main-details">
            <h3>{product.title}</h3>
            <p>{product.color}</p>
            <br />
            <p>{product.guarantee}</p>
          </div>
        </div>
        <div className="details">
          <div className="pricing">
            <ToomanRedIcon />
            <span> {product.discount}</span>
            <h2>
              <span>
                <ToomanIcon />
              </span>
              {product.price}
            </h2>
          </div>
          <div className="change-count">
            <button
              className=" change-btn"
              onClick={() => {
                const temp = { ...defaultCart };
                temp[product.id].count = temp[product.id].count - 1;
                setProduct(temp[product.id]);
                console.log(product);
              }}
            >
              -
            </button>
            <h2>{product.count}</h2>
            <button className=" change-btn">+</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CartSingleItem;
