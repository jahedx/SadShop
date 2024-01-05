import styled from "styled-components";

const Wrapper = styled.section`
  .section-center {
    text-align: right;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: var(--fluid-width);
  }
  button {
    width: 100%;
    background: transparent;
    border: none;
    display: block;
    text-align: right;
    font-family: IRANYekan;
  }

  .private-info {
    min-width: 70%;
    margin: 1rem;

    h2 {
      margin-bottom: 3rem;
      font-size: 1.3rem;
      font-weight: 800;
    }
  }
  .information {
    margin: 1rem;
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    padding: 3rem;
  }
  .info-label {
    margin: 1.1rem;
    font-weight: 600;
    display: block;
    text-align: right;
  }
  .user-information {
    margin-right: 2rem;
    font-weight: 500;
    font-size: 0.9rem;
  }
  .edit-icon {
    color: var(--primary-500);
    font-size: 1.25rem;
    transition: var(--transition);
  }
  .edit-icon:hover {
    color: var(--grey-600);
  }
  .edit-btn {
    width: 100%;
    display: flex;
    justify-content: left;
  }
  .dashboard {
    min-width: 220px;
    color: var(--grey-600);
    padding: 1rem;
    width: 20%;
    height: 30rem;
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
  }
  .dashboard-title {
    h4 {
      color: var(--grey-600);
      font-size: 1rem;
      transition: var(--transition);
      margin-top: 1rem;
    }
  }
  .dashboard-title {
    h4:hover {
      cursor: pointer;
      color: var(--primary-500);
    }
  }
  .additional-info {
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid var(--grey-300);
    border-bottom: 1px solid var(--grey-300);
    h4 {
      transition: var(--transition);
      color: var(--grey-600);
      font-size: 1rem;
      margin-top: 1rem;
      span {
        margin-left: 10px;
      }
    }
  }

  .additional-info {
    h4:hover {
      color: var(--primary-500);
      cursor: pointer;
    }
  }
  .selected-page {
    h4 {
      color: var(--primary-500);
    }
  }
`;

export default Wrapper;
