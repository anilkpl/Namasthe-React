import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const response = await fetch(RES_MENU_URL + resId);
    const menuData = await response.json();
    console.log(menuData);
    setResInfo(menuData);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, locality, costForTwo } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(itemCards);
  return (
    <div className="resMenu-container">
      <h2>{name}</h2>
      <div>{locality}</div>
      <div>Cost for two Rs/-{costForTwo / 100}</div>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item,index) => (
          <li key={index}>
            {item.card.info.name}----{" Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
