import { useState,useEffect } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useFetchRestMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchResMenu();
      }, []);
    
      const fetchResMenu = async () => {
        const response = await fetch(RES_MENU_URL + resId);
        const menuData = await response.json();
        setResInfo(menuData);
      };

    return resInfo;
}

export default useFetchRestMenu;