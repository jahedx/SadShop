import styled from "styled-components";

const Wrapper = styled.nav`
  min-height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  width: 100vw;
  background: var(--background-secondary-color);

  header {
    display: grid;
    grid-template-columns: 1fr;
    width: var(--fluid-width);
  }
  .upper-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: 0.05rem;
  }
  .nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    text-align: center;
  }

  .title-underline {
    background: var(--primary-500);
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: 1rem;
  }

  .search-box {
    width: 60%;
    display: flex;
    background: var(--grey-200);
    border-radius: var(--border-radius);
  }

  .input-search {
    width: 100%;
    background: transparent;
    border: none;
  }
  .input-search :focus {
    border: none;
  }
  .search-icon {
    font-size: 1.5rem;
    transition: var(--transition);
    margin: 0 0.5rem;
    color: var(--grey-600);
  }
  .btn-search {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .btn-search:hover {
    .search-icon {
      color: var(--primary-500);
    }
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }

  .link {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
    color: var(--primary-500);
    transition: var(--transition);
    margin: 0 0.5rem;
  }
  .link:hover {
    color: var(--black);
  }

  .icon {
    font-size: 1.5rem;
    color: var(--primary-500);
    transition: var(--transition);
    margin: 0 0.5rem;
  }
  .icon:hover {
    color: var(--black);
  }
  .nav-bars {
    margin: 0 -0.5rem;
  }
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
  }

  /* styles.css (or any other stylesheet you are using) */

  .category li {
    margin: 0 10px;
  }

  .category a {
    text-decoration: none;
    color: black;
  }

  .dropdown {
    width: 90vw;
    background: white;
    display: none;
    position: absolute;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: right;
    border-radius: var(--border-radius);
    left: 5%;
    transition: var(--transition);
  }

  .dropdown li {
    transition: var(--transition);
    padding: 1rem;
    margin: 1rem 0;
    display: block;
  }

  li a {
    transition: var(--transition);
  }

  .dropdown li a:hover {
    padding-right: 0.5em;
    color: var(--primary-500);
  }
  .category li:hover .dropdown {
    z-index: 2;
    display: block;
  }

  .big-category {
    display: none;
    order: 2; /* Set the order to 2 to move it to the bottom */
  }

  @media (min-width: 992px) {
    header {
      grid-template-columns: 1fr 1fr;
      max-width: 80vw;
      grid-template-areas:
        "a b b"
        "c c c";
    }

    .upper-header {
      grid-area: b;
    }

    .nav {
      grid-area: a;
    }

    .category {
      display: none;
    }

    .big-category {
      grid-area: c;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: right;
    }

    .big-category ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .big-category ul li :hover {
      color: var(--primary-500);
      /* border-bottom: 2px solid var(--primary-500); */
    }
    .big-category ul li {
      display: inline-block;
      position: relative;
      padding: 0 1rem;
      text-align: center;
      /* padding-bottom: 2rem; */
    }
    .big-category ul li a {
      font-size: 12px;
      color: black;
    }
  }
`;
export default Wrapper;
