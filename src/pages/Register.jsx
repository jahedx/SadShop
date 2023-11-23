import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow.jsx";
import Logo from "../components/Logo.jsx";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="John"></FormRow>

        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="Smith"
        ></FormRow>

        <FormRow type="text" name="location" defaultValue="new york"></FormRow>

        <FormRow
          type="email"
          name="email"
          defaultValue="john@gmail.com"
        ></FormRow>

        <FormRow
          type="password"
          name="password"
          defaultValue="secret123"
        ></FormRow>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          already amember?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
