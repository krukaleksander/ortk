import logo from "../media/or.png";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
