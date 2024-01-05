import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100vw;
  background: var(--background-secondary-color);
  padding-bottom: 1rem;
  overflow: hidden;

  .footer-center {
    margin-top: 2rem;
    width: 90vw;
  }

  .footer-contact {
    span {
      display: none;
    }
    text-align: center;
  }
  .footer-contact p {
    margin: 1rem;
  }
  .icon:hover {
    color: var(--black);
  }
  .icon {
    color: var(--primary-500);
    font-size: 1.5rem;
    margin: 0.5rem;
    transition: var(--transition);
  }
  .icons {
    padding: 0.5rem;
    border-radius: var(--border-radius);

    background: var(--grey-100);
    margin-bottom: 1rem;
  }
  .social p {
    margin: 1rem;
  }
  .social {
    text-align: center;
  }
  .logo {
    max-width: 10rem;
  }
  .copyright {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .logo {
    order: 2;
  }
  .copyright h4 {
    font-size: 1rem;
    align-self: flex-end;
  }
  @media (min-width: 992px) {
    .footer-contact {
      display: flex;
      justify-content: end;
      span {
        display: block;
        align-self: center;
        color: var(--grey-400);
      }
    }
    .social p {
      text-align: right;
    }
    .slider-container {
      width: 90vw;
    }
  }
`;

export default Wrapper;
