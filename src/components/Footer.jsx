import Wrapper from "../assets/wrappers/Footer";
import Logo from "./Logo";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Wrapper>
      <footer>
        <div className="footer-center">
          <div className="footer-contact">
            <p>شماره تماس: 55681964-021</p>
            <span>|</span>
            <p>هر روز هفته، همه ساعات، پاسخگوی شماییم</p>
          </div>
          <div className="social">
            <p>: مارا دنبال کنید</p>
            <div className="icons">
              <Link className="icon">
                <FaInstagram />
              </Link>
              <Link className="icon">
                <MdEmail />
              </Link>
              <Link className="icon">
                <FaLinkedin />
              </Link>
              <Link className="icon">
                <FaTwitter />
              </Link>
              <Link className="icon">
                <BiLogoTelegram />
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          <Logo className="logo" />
          <h4 className="footer-text">
            &copy; copyright sadshop <span>{date}</span>
          </h4>
          <h4>
            تمامی حقوق متعلق به شرکت<span className="company"> سدشاپ</span> می
            باشد
          </h4>
        </div>
      </footer>
    </Wrapper>
  );
};
export default Footer;
