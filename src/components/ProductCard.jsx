import Wrapper from "../assets/wrappers/ProductCard.js";

/* eslint-disable react/prop-types */
const ProductCard = (props) => {
  const { img, name, sellingPrice, offPercent, realPrice } = props;
  return (
    <Wrapper>
      <div className="card">
        <div className="image-container">
          <img src={img} alt="" className="card-img" />
          <p className="product-name">{name}</p>
        </div>
        <div className="pricing">
          <span className="off-percent">{offPercent}</span>
          <div className="selling-price">
            <span>تومان</span>
            <h3>{sellingPrice}</h3>
          </div>
          <div className="real-price">
            <h3>{realPrice}</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProductCard;
