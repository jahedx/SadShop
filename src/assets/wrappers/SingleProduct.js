import styled from "styled-components";

const Wrapper = styled.section`
  .page {
    text-align: right;
    width: var(--fluid-width);
    background: white;
    margin: auto;
    display: block;
  }

  .slider-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .images {
    padding: 2rem 0;
    margin: 2rem 0;
    border-radius: var(--border-radius);
    overflow: hidden;
    width: 30rem;
  }
  img {
    width: 100%;
    border-radius: var(--border-radius);
  }

  .title {
    padding: 1rem;
    margin: 1rem 0;
    h4 {
      font-size: 1rem;
      font-weight: 700;
    }
  }
  .description {
    text-align: right;
    margin: 1rem 0;
    padding: 1rem;
    font-size: 0.8rem;
    line-height: 25px;
    color: var(--grey-500);
  }

  .add-to-cart {
    .btn {
      font-weight: 700;
      font-family: IRANYekan, sans-serif;
      padding: 10px;
    }
    margin-left: auto;
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding: 1rem;
  }

  .pricing {
    font-weight: 700;
    align-items: end;
    display: flex;
    padding: 0.5rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 0.5rem;
    }
  }
`;

export default Wrapper;
