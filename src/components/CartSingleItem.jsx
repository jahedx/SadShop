import Wrapper from "../assets/wrappers/CartSingleItem.js";
import ToomanIcon from "./ToomanIcon";
import ToomanRedIcon from "./ToomanRedIcon.jsx";
import { useGlobalContext } from "../context.jsx";
import { useState } from "react";

const CartSingleItem = (props) => {
  const { defaultCart, setDefaultCart } = useGlobalContext();
  // var { id, img, count, price, discount, title, color, guarantee } = props;
  const [product, setProduct] = useState(props);
  const [count, setCount] = useState(props.count);
  const [cost, setCost] = useState(props.cost);
  // console.log(count);

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
              {cost}
            </h2>
          </div>
          <div className="change-count">
            <button
              className=" change-btn"
              onClick={() => {
                var temp = { ...defaultCart };
                temp[product.id].count = temp[product.id].count - 1;
                setCount(count - 1);
                setCost(cost - cost / count);
                temp[product.id].cost = (cost / count) * (count - 1);
                temp[product.id].discount =
                  (product.discount / count) * (count - 1);
                console.log(temp);
                setProduct(temp[product.id]);
                // setDefaultCart(product);
                // console.log(defaultCart);
              }}
            >
              -
            </button>
            <h2>{count}</h2>
            <button
              className=" change-btn"
              onClick={() => {
                var temp = { ...defaultCart };
                temp[product.id].count = temp[product.id].count + 1;
                setCost(product.price * (count + 1));
                temp[product.id].cost = (cost / count) * (count + 1);
                temp[product.id].discount =
                  (product.discount / count) * (count + 1);
                console.log(temp);
                setCount(count + 1);
                setProduct(temp[product.id]);
                // console.log(count);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CartSingleItem;
