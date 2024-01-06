import Wrapper from "../assets/wrappers/ProductCard.js";
import ToomanIcon from "./ToomanIcon";


/* eslint-disable react/prop-types */
const ProductCard = (props) => {
  const { img, name, sellingPrice, offPercent, realPrice, isAvailable } = props;
  return (
    <Wrapper>
      <div className="card">
        <div className="image-container">
          <img src={img} alt="" className="card-img" />
          <p className="product-name">{name}</p>
        </div>
        {isAvailable ? (
          <div className="pricing">
            {offPercent != "0%" ? (
              <span className="off-percent">{offPercent}</span>
            ) : (
              <br />
            )}
            <div className="selling-price">
              <h3>{sellingPrice}</h3>
              <ToomanIcon />
            </div>
            <div className="real-price">
              <h3>{realPrice}</h3>
            </div>
          </div>
        ) : (
          <div className="pricing">
            <div className="not-avalable">ــــــ ناموجود ــــــ</div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
export default ProductCard;
