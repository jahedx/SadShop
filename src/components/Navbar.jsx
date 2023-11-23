import React from "react";
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

const Navbar = () => {
  return (
    <Wrapper>
      <React.Fragment>
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

            <ul className="category">
              <li>
                <Link to="" className="icon">
                  <FaBars />
                </Link>
                <div className="dropdown">
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
              </li>
            </ul>
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
      </React.Fragment>
    </Wrapper>
  );
};

export default Navbar;
