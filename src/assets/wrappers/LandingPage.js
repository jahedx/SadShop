import styled from "styled-components";

const Wrapper = styled.section`
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
    flex-wrap: wrap;
    align-items: center;
    align-content: space-around;
    margin: 0 auto;
    overflow: hidden;
  }

  .slider {
    z-index: -1;
    margin: 2rem 0;
    display: inline-block;
    border-radius: var(--border-radius);
    min-width: var(--fluid-width);
    overflow: hidden;
  }

  img {
    width: 100%;
    display: block;
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

  .laptop-suggest {
    width: 100%;
  }
  .cards-container {
    background-color: var(--grey-200);
    border-radius: var(--border-radius);
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: stretch;
    /* justify-content: space-around; */
    justify-content: center;
  }

  .amazings {
    .amazings-image {
      min-width: 250px;
      background: var(--primary-50);
      margin: 10px;
    }
    margin: 1rem 0;
    background: var(--primary-50);
    width: 100%;
    display: flex;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
  }
`;
export default Wrapper;
