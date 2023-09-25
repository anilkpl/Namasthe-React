import { NavLink } from "react-router-dom";
import { RES_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="head-container">
      <div className="logo-container">
        <NavLink to="/">
          <img alt="logo" className="logo-img" src={RES_LOGO_URL} />
        </NavLink>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
