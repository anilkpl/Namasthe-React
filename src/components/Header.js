import { NavLink } from "react-router-dom";
import { RES_LOGO_URL } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store)=>store?.cart?.items);

  return (
    <>
      <div className="flex items-center justify-between bg-red-300 p-2 m-1 rounded-md shadow-lg">
        <div className="logo-container">
          <NavLink to="/">
            <img
              alt="logo"
              className="w-32 h-28 rounded-md"
              src={RES_LOGO_URL}
            />
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
              <NavLink to="/instamart">Instamart</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <div className="bg-gray-100 flex justify-center items-center">
                  <div className="relative bg-red-300">
                    <div className="t-0 absolute left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        {cartItems?.length}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      
                      stroke="currentColor"
                      className="file: mt-4 w-6"
                    >
                      <path
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>{onlineStatus ? "✅" : "🔴"}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
