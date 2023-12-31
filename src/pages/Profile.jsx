import Wrapper from "../assets/wrappers/Profile.js";
import MainAvatar from "../components/MainAvatar.jsx";
import { user } from "../data/Data";
import { FaEdit, FaShoppingCart, FaRegHeart, FaUser } from "react-icons/fa";
import {
  MdSpaceDashboard,
  MdOutlineInsertComment,
  MdOutlineLocationOn,
  MdLogout,
} from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [user1, setUser1] = useState(user);
  const [page, setPage] = useState("accountInfo");
  // console.log(user);
  return (
    <Wrapper>
      <div className="section-center">
        <div className="private-info">
          <h2>اطلاعات حساب کاربری</h2>

          <div className="information">
            <h2>اطلاعات شخصی</h2>
            <div className="info-values">
              <div className="user-info">
                <label htmlFor="name" className="info-label">
                  نام
                </label>
                <div className="user-information">{user.name}</div>
                <br />
              </div>
              <div className="user-info">
                <label htmlFor="lastName" className="info-label">
                  نام خانوادگی
                </label>
                <div className="user-information">{user.lastName}</div>
                <br />
              </div>
              <div className="user-info">
                <label htmlFor="bDate" className="info-label">
                  تاریخ تولد
                </label>
                <div className="user-information">{user.bDate}</div>
                <br />
              </div>
              <div className="user-info">
                <label htmlFor="phone" className="info-label">
                  شماره تماس
                </label>
                <div className="user-information">{user.phoneNumber}</div>
                <br />
              </div>
              <div className="user-info">
                <label htmlFor="email" className="info-label">
                  ایمیل
                </label>
                <div className="user-information">{user.email}</div>
              </div>

              <div className="user-info">
                <label htmlFor="nationalID" className="info-label">
                  کد ملی
                </label>
                <div className="user-information">{user.nationalID}</div>
              </div>
            </div>
            <div className="edit-btn">
              <Link className="edit-icon">
                <FaEdit />
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="">
            <MainAvatar />
          </div>
          <div>
            <button
              onClick={() => {
                setPage("dashboard");
              }}
            >
              <div
                className={
                  page === "dashboard"
                    ? "selected-page dashboard-title"
                    : "dashboard-title"
                }
              >
                <h4 className="dash-title">
                  داشبورد
                  <span>
                    <MdSpaceDashboard />
                  </span>
                </h4>
              </div>
            </button>
            <div className="additional-info">
              <button
                onClick={() => {
                  setPage("orders");
                }}
              >
                <div className={page === "orders" ? "selected-page" : " "}>
                  <h4>
                    سفارش ها
                    <span>
                      <FaShoppingCart />
                    </span>
                  </h4>
                </div>
              </button>
              <button
                onClick={() => {
                  setPage("comments");
                }}
              >
                <div className={page === "comments" ? "selected-page" : " "}>
                  <h4>
                    نظرات
                    <span>
                      <MdOutlineInsertComment />
                    </span>
                  </h4>
                </div>
              </button>
              <button
                onClick={() => {
                  setPage("addresses");
                }}
              >
                <div className={page === "addresses" ? "selected-page" : " "}>
                  <h4>
                    آدرس ها
                    <span>
                      <MdOutlineLocationOn />
                    </span>
                  </h4>
                </div>
              </button>
              <button
                onClick={() => {
                  setPage("favorites");
                }}
              >
                <div className={page === "favorites" ? "selected-page" : " "}>
                  <h4>
                    علاقه مندی ها
                    <span>
                      <FaRegHeart />
                    </span>
                  </h4>
                </div>
              </button>
              <button
                id="acc-info"
                onClick={() => {
                  setPage("accountInfo");
                }}
              >
                <div className={page === "accountInfo" ? "selected-page" : " "}>
                  <h4>
                    اطلاعات حساب کاربری
                    <span>
                      <FaUser />
                    </span>
                  </h4>
                </div>
              </button>
            </div>
            <button
              onClick={() => {
                setUser1(null);
              }}
            >
              <div className="dashboard-title">
                <h4 style={{ marginTop: "1rem" }}>
                  خروج از حساب{" "}
                  <span>
                    <MdLogout />
                  </span>
                </h4>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default Profile;
