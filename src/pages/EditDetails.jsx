import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import { Link } from "react-router-dom";

const EditDetails = () => {
  return (
    <Wrapper>
      <div>
        <form className="form" onSubmit>
          <label className="form-label" htmlFor="name">
            نام
          </label>
          <input className="form-input" type="text" name="name" id="name" />
          <label className="form-label" htmlFor="lastName">
            نام خانوادگی
          </label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            id="lastName"
          />
          <label className="form-label" htmlFor="birthDate">
            تاریخ تولد
          </label>
          <input
            className="form-input"
            type="date"
            name="birthDate"
            id="birthDate"
          />
          <label className="form-label" htmlFor="phoneNumber">
            شماره تلفن
          </label>
          <input className="form-input" type="email" name="email" id="email" />
          <label className="form-label" htmlFor="nationalID">
            کد ملی
          </label>
          <input
            className="form-input"
            type="number"
            name="nationalID"
            id="nationalID"
          />
          <label className="form-label" htmlFor="postCode">
            کدپستی
          </label>
          <input
            className="form-input"
            type="tel"
            name="postCode"
            id="postCode"
          />
          <label className="form-label" htmlFor="Address">
            آدرس
          </label>
          <input
            className="form-input"
            type="text"
            name="Address"
            id="Address"
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
