import styled from "styled-components";

const Wrapper = styled.section`
  .card {
    min-height: 24rem;
    width: 16rem;
    background: var(--white);
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius);
    text-align: right;
    padding: 1rem;
    transition: var(--transition);
    margin: 1rem;
  }
  .card:hover {
    box-shadow: var(--shadow-4);
    cursor: pointer;
    margin-top: 0.5rem;
  }
  .selling-price {
    img {
      width: 1.3rem;
    }
    margin-top: 0.5rem;
    text-align: left;
    display: flex;
    /* justify-content: space-around; */
    flex-direction: row-reverse;
    gap: 1rem;
    h3 {
      align-self: self-end;
    }
    span {
      font-weight: 500;
    }
  }
  .not-avalable {
    text-align: center;
    color: var(--grey-500);
  }
  .off-percent {
    color: var(--white);
    margin-left: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 20px;
    font-weight: 600;
    background: red;
    border-radius: 25px;
  }
  .real-price {
    h3 {
      margin-top: 0.35rem;
      color: var(--grey-500);
      font-size: 0.75rem;
      text-decoration: line-through;
    }
  }

  p {
    font-size: 0.75rem;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  img {
    object-fit: cover;
    width: 100%;
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
  }
`;
export default Wrapper;
