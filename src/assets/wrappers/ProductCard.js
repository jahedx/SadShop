import styled from "styled-components";

const Wrapper = styled.section`
  .card {
    max-width: 16rem;
    background: var(--white);
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius);
    text-align: right;
    padding: 1rem;
    transition: var(--transition);
  }
  .card:hover {
    box-shadow: var(--shadow-4);
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
  .selling-price {
    margin-top: 0.5rem;
    text-align: left;
    display: flex;
    justify-content: space-around;
    h3 {
      align-self: self-end;
    }
    span {
      font-weight: 500;
    }
  }
  .off-percent {
    color: var(--white);
    margin-left: auto;
    text-align: center;
    display: block;
    width: 50px;
    height: 20px;
    font-weight: 600;
    background: red;
    border-radius: 25px;
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
