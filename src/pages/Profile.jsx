import Wrapper from "../assets/wrappers/Profile.js";
import MainAvatar from "../components/MainAvatar.jsx";
import { FaEdit, FaShoppingCart, FaRegHeart, FaUser } from "react-icons/fa";
import {
  MdSpaceDashboard,
  MdOutlineLocationOn,
  MdLogout,
} from "react-icons/md";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { get } from "../modules/axiosService.js";

function Profile() {
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  });

  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const { defaultUser, setDefaultUser } = useGlobalContext();
  const [page, setPage] = useState("accountInfo");

  const addresses = (props) => {
    const { address, city, postCode, phone, name } = props;
    return (
      <section className="addresses" key={address}>
        <h2>{address}</h2>
        <h4>{city}</h4>
        <h4>{postCode}</h4>
        <h4>{phone}</h4>
        <h4>{name}</h4>
        <div className="edit-btn">
          <Link className="edit-icon">
            <FaEdit />
          </Link>
        </div>
      </section>
    );
  };
  return (
    <Wrapper>
      <div className="section-center">
        {page === "accountInfo" && (
          <div className="private-info">
            <h2>اطلاعات حساب کاربری</h2>

            <div className="information">
              <h2>اطلاعات شخصی</h2>
              <div className="info-values">
                <div className="user-info">
                  <label htmlFor="name" className="info-label">
                    نام
                  </label>
                  <div className="user-information">{user.first_name}</div>
                  <br />
                </div>
                <div className="user-info">
                  <label htmlFor="lastName" className="info-label">
                    نام خانوادگی
                  </label>
                  <div className="user-information">{user.last_name}</div>
                  <br />
                </div>
                <div className="user-info">
                  <label htmlFor="bDate" className="info-label">
                    تاریخ تولد
                  </label>
                  <div className="user-information">{defaultUser.bDate}</div>
                  <br />
                </div>
                <div className="user-info">
                  <label htmlFor="phone" className="info-label">
                    شماره تماس
                  </label>
                  <div className="user-information">
                    {defaultUser.phoneNumber}
                  </div>
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
                  <div className="user-information">
                    {defaultUser.nationalID}
                  </div>
                </div>
              </div>
              <div className="edit-btn">
                <Link to={"./editdetails"} className="edit-icon">
                  <FaEdit />
                </Link>
              </div>
            </div>
          </div>
        )}
        {page !== "accountInfo" && (
          <div className="section">
            {page === "addresses" &&
              defaultUser.addresses.map((address) => {
                return addresses(address);
              })}
          </div>
        )}

        <div className="dashboard">
          <div className="">
            <MainAvatar />
          </div>
          <div>
            <div className="dashboard-title">
              <h4 className="dash-title">
                داشبورد
                <span>
                  <MdSpaceDashboard />
                </span>
              </h4>
            </div>
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
              onClick={async () => {
                setDefaultUser(null);
                setUser(null);
                localStorage.removeItem("user");
                try {
                  const list1 = await get("/account/logout/");
                  console.log("Get response: ", list1);
                } catch (error) {
                  console.error("Error while fetching data", error);
                }
                navigate("/login");
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
