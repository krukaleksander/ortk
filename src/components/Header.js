import logo from "../media/or.png";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const showMenuFn = () =>
    (document.querySelector(".navigation").style.left = "0px");
  return (
    <header>
      <div className="logo">
        <div className="mobile-menu-icon">
          <FaBars onClick={() => showMenuFn()} />
        </div>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
