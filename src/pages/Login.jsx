import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo.jsx";
import { useEffect, useState } from "react";
import { post } from "../modules/axiosService.js";

const Login = () => {
  const navigate = useNavigate(); // Import useHistory from react-router-dom
  const [login, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/profile");
    }
  });

  async function loginHandler(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const handleLogin = await post("/login", {
        login: login,
        password: password,
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
      <form className="form" onSubmit={loginHandler}>
        <Logo />
        <h4>Login</h4>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          id="userName"
          name="userName"
          className="form-input"
          defaultValue=""
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="passWord"
          name="passWord"
          className="form-input"
          defaultValue=""
          required
        />

        <button type="submit" className="btn btn-block">
          login
        </button>
        <p>
          not a member?
          <Link to="/Register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
