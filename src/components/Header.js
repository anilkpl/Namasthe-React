import { RES_LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="head-container">
        <div className="logo-container">
          <img
            alt="logo"
            className="logo-img"
            src= {RES_LOGO_URL}
          />
        </div>
        <div className="nav-container">
          <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;