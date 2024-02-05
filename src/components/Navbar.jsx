import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineShoppingCart,
  AiOutlineQuestionCircle,
  AiOutlineSearch,
} from "react-icons/Ai";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import DropDown from "./DropDown.jsx";

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);
  return (
    <React.Fragment>
      <Wrapper>
        <header>
          <div className="upper-header">
            <div className="search-box">
              <button className="btn-search">
                <AiOutlineSearch className="search-icon" />
              </button>
              <input
                type="text"
                className="input-search"
                placeholder="Type to Search..."
              />
            </div>
            <Link to={"./"}>
              <Logo />
            </Link>
          </div>
          <div className="nav">
            <div className="nav-left-side">
              <Link to={"./cart"} className="icon cart-link-icon">
                <AiOutlineShoppingCart />
              </Link>
              <span>|</span>
              <Link to={"/login"} className="link">
                <CgProfile />
              </Link>
              <span>|</span>
              <Link to={"./help"} className="icon help-link-icon">
                <AiOutlineQuestionCircle />
              </Link>
            </div>

            <button
              to=""
              className="icon bars"
              onClick={() => {
                setDropDown(~dropdown);
              }}
            >
              <FaBars />
            </button>
          </div>
          <div className="big-category">
            <ul>
              <li>
                <Link to="">کالای دیجیتال</Link>
              </li>
              <li>
                <Link to="">خانه و آشپزخانه</Link>
              </li>
              <li>
                <Link to="">خودرو، ابزار، باغبانی</Link>
              </li>
              <li>
                <Link to="">فرهنگ و هنر</Link>
              </li>
              <li>
                <Link to="">بهداشت شخصی و سلامت محیط</Link>
              </li>
              <li>
                <Link to="">اسباب بازی، کودک و نوزاد</Link>
              </li>
              <li>
                <Link to="">ورزش، سفر، کمپینگ</Link>
              </li>
              <li>
                <Link to="">طلا، مد و پوشاک</Link>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        </header>
        <handleDropdown />
      </Wrapper>
      {dropdown ? <DropDown /> : ""}
    </React.Fragment>
  );
};

export default Navbar;
