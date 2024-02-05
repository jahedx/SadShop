import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo.jsx";
import { post } from "../modules/axiosService.js";
import { useState } from "react";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  async function registerHandler(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const handleRegister = await post("accounts/customer_register/", {
        username: username,
        password: password,
        password2: password2,
        email: email,
        phoneNumber: phoneNumber,
        city: city,
      });
      console.log("Get response: ", handleRegister);

      localStorage.setItem("user", JSON.stringify(handleRegister));
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
        <h4>ثبت نام</h4>

        <label htmlFor="userName" className="form-label">
          نام کاربری
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
          placeholder="نام کاربری"
          required
        />

        <label htmlFor="phoneNumber" className="form-label">
          شماره تلفن
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
          placeholder="شماره تلفن"
          required
        />

        <label htmlFor="password" className="form-label">
          رمزعبور
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          id="password"
          name="password"
          className="form-input"
          placeholder="رمز عبور"
          defaultValue=""
          required
        />
        <label htmlFor="password2" className="form-label">
          تکرار رمز
        </label>
        <input
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
          type="password"
          id="password2"
          name="password2"
          className="form-input"
          placeholder="تکرار رمز"
          defaultValue=""
          required
        />
        <label htmlFor="email" className="form-label">
          ایمیل
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          id="email"
          name="eamil"
          className="form-input"
          placeholder="ایمیل"
          defaultValue=""
          required
        />
        <label htmlFor="city" className="form-label">
          شهر
        </label>
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          id="city"
          name="city"
          className="form-input"
          placeholder="شهر"
          defaultValue=""
          required
        />

        <button type="submit" className="btn btn-block">
          ثبت
        </button>
        <p>
          عضو هستید؟
          <Link to="/login" className="member-btn">
            وارد شوید
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
