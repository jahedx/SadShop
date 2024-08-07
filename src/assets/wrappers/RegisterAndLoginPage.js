import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    width: 85%;
    margin-bottom: 1.38rem;
  }

  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }

  input {
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }

  .btn {
    font-family: "IRANYekan", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
    padding: 0.75rem;
  }

  .member-btn {
    color: var(--primary-500);
    margin-left: 0.25rem;
  }
  .form-label {
    letter-spacing: normal;
    text-align: right;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: -0.5rem;
  }
`;

export default Wrapper;
