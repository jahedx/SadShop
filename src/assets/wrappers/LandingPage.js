import styled from "styled-components";

const 0Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    width: var(--fluid-width);
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  .slider {
    border-radius: var(--border-radius);
    width: 100%;
    overflow: hidden;
  }

  img {
    width: 100%;
    display: block;
    /* max-width: 80vw; */
    object-fit: cover;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }

  .cards-container{
    width: 80vw;
  }


  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }

  }
`;
export default Wrapper;
