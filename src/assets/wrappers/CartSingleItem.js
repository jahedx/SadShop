import styled from "styled-components";

const Wrapper = styled.article`
  .container {
    padding: 1rem;
    /* border-radius: var(--border-radius); */
    border-bottom: 1px solid var(--grey-300);
    background: var(--white);
  }
  .main-description {
    display: flex;
    flex-direction: row-reverse;
    background: var(--white);
    padding: 1rem;
    border-radius: var(--border-radius);
  }
  .product-image {
    width: 120px;
  }

  .main-details {
    h3 {
      font-size: 0.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      color: var(--grey-600);
      font-weight: 500;
      font-size: 0.7rem;
    }
  }
  .pricing {
    span {
      color: red;
      font-size: 0.8rem;
      font-weight: 500;
      margin-top: 0.7rem;
    }
    h2 {
      font-weight: 450;
      font-size: 1.2rem;
      margin-top: 0.7rem;
      margin-bottom: 0.7rem;
    }
    img {
      width: 1.2rem;
      color: var(--red-light);
    }
  }
  .details {
    display: flex;
    justify-content: end;
    gap: 1rem;
  }
  .change-count {
    /* margin-left: auto; */
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    width: 6rem;
    height: 3rem;
    align-self: flex-end;
    /* padding: 1rem; */
    display: flex;
    align-items: center;
    justify-content: right;
    flex-wrap: nowrap;
    h2 {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      color: var(--primary-500);
    }
  }
  .change-btn {
    cursor: pointer;
    color: var(--primary-500);
    display: flex;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1.7rem;
    /* width: 1rem; */
    /* height: 1rem; */
    border: none;
    background: transparent;
    transition: var(--transition);
  }
  .change-btn:hover {
    color: var(--black);
  }
`;

export default Wrapper;
