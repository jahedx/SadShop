import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo.jsx";
import { useState } from "react";

const Login = () => {
  const history = useNavigate(); // Import useHistory from react-router-dom
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log(username, password);
    let item = { username, password };

    try {
      let result = await fetch(
        "http://192.168.200.165:8001/api/authenticate/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        }
      );

      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }

      result = await result.json();
      localStorage.setItem("user.info", JSON.stringify(result));
      history.push("./profile");
    } catch (error) {
      console.error("Login failed", error.message);
      // Handle login error (e.g., show a message to the user)
    }
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={login}>
        <Logo />
        <h4>Login</h4>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="userName"
          name="userName"
          className="form-input"
          defaultValue={"ali" || ""}
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
