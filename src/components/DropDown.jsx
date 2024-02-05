import { Link } from "react-router-dom";
import Wrapper from "./../assets/wrappers/Navbar";

const DropDown = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default DropDown;
