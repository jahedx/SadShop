import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100vw;
  background: var(--background-secondary-color);
  padding-bottom: 1rem;

  .footer-center {
    margin-top: 2rem;
    width: 90vw;
  }

  .footer-contact {
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
    font-size: 2rem;
    margin: 0.5rem;
    transition: var(--transition);
  }
  .icons {
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
    align-self: flex-end;
  }
`;

export default Wrapper;
