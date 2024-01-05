import Wrapper from "../assets/wrappers/CartSingleItem.js";
import ToomanIcon from "./ToomanIcon";
import ToomanRedIcon from "./ToomanRedIcon.jsx";
ToomanRedIcon;
const CartSingleItem = (props) => {
  const { id, img, count, price, discount, title, color, guarantee } = props;
  return (
    <Wrapper>
      <div className="container">
        <p>{count} کالا</p>
        <div className="main-description">
          <img src={img} alt={title} className="product-image" />
          <div className="main-details">
            <h3>{title}</h3>
            <p>{color}</p>
            <br />
            <p>{guarantee}</p>
          </div>
        </div>
        <div className="details">
          <div className="pricing">
            <ToomanRedIcon />
            <span> {discount}</span>
            <h2>
              <span>
                <ToomanIcon />
              </span>
              {price}
            </h2>
          </div>
          <div className="change-count">
            <button className=" change-btn">-</button>
            <h2>{count}</h2>
            <button className=" change-btn">+</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default CartSingleItem;
