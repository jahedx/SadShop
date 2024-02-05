import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo.jsx";
import { post } from "../modules/axiosService.js";
import { useState } from "react";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [phonenuNmber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  async function registerHandler(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const handleLogin = await post("accounts/register", {
        username: username,
        password: password,
        phonenuNmber: phonenuNmber,
      });
      console.log("Get response: ", handleLogin);

      localStorage.setItem("user", JSON.stringify(handleLogin));
      navigate("/profile");

      // Additional logic (e.g., storing data in localStorage) can go here
    } catch (error) {
      console.error("Error while fetching data", error);
    }

    // console.log(login);
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={registerHandler}>
        <Logo />
        <h4>Register</h4>

        <label htmlFor="userName" className="form-label">
          username
        </label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          id="userName"
          name="userName"
          className="form-input"
          defaultValue=""
          placeholder="Username"
          required
        />

        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          className="form-input"
          defaultValue=""
          placeholder="Phone Number"
          required
        />

        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          id="password"
          name="password"
          className="form-input"
          placeholder="Password"
          defaultValue=""
          required
        />

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
