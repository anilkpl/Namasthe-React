import { NavLink } from "react-router-dom";
import { RES_LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus()
  return (
    <>
      <div className="flex items-center justify-between bg-red-300 p-2 m-1 rounded-md shadow-lg">
        <div className="logo-container">
          <NavLink to="/">
            <img alt="logo" className="w-32 h-28 rounded-md" src={RES_LOGO_URL} />
          </NavLink>
        </div>
        
        <div className="nav-container">
          <ul className="flex gap-6 text-xl list-none">
            
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
            <li>{onlineStatus ? '✅' : '🔴'}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
