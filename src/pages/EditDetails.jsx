import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import { Link, useNavigate } from "react-router-dom";
import { get } from "../modules/axiosService.js";
import { useState } from "react";
const EditDetails = () => {
  const navigate = useNavigate();
  const [first_name, setname] = useState("");
  const [last_name, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setphoneNumber] = useState("");

  async function handleEdit(e) {
    e.preventDefault();

    try {
      const userEdit = await get("accounts/login/", {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        city: city,
      });
      console.log("Get response: ", userEdit);

      localStorage.setItem("user", JSON.stringify(userEdit));
      navigate("/profile");
    } catch (error) {
      console.error("Error while fetching data", error);
    }
  }

  return (
    <Wrapper>
      <div>
        <form className="form" onSubmit={handleEdit}>
          <label className="form-label" htmlFor="username">
            نام کاربری
          </label>
          <input
            className="form-input"
            type="text"
            name="username"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="name">
            نام
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="lastName">
            نام خانوادگی
          </label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="birthDate">
            رمز عبور
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="phoneNumber">
            شماره تلفن
          </label>
          <input
            className="form-input"
            type="emphoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
          />

          <label className="form-label" htmlFor="postCode">
            ایمیل
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="Address">
            شهر
          </label>
          <input
            className="form-input"
            type="text"
            name="city"
            id="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-block">
            ثبت
          </button>
          <Link
            to={"/profile"}
            className="btn btn-block"
            style={{ textAlign: "center" }}
          >
            {" "}
            لغو
          </Link>
        </form>
      </div>
    </Wrapper>
  );
};
export default EditDetails;
