import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestMenu from "../utils/useFetchRestMenu";
import RestaurentCategory from "./RestaurentCategory";
import React, { useState } from "react";

const RestaurentMenu = () => {
  // children components controlled by parent(lifting the stae up)
  const [categoryIndex, setCategoryIndex] = useState(2);
  const [showItemList, setShowItemList] = useState(true);
  const { resId } = useParams();
  const resInfo = useFetchRestMenu(resId);

  if (resInfo === null)
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="p-4 m-4 w-6/12 h-[150px] shadow-2xl rounded-md bg-red-50">
          <Shimmer />
        </div>
        <div className="p-4 m-4 w-6/12 h-[400px] shadow-2xl rounded-md bg-red-50">
          <Shimmer />
        </div>
      </div>
    );

  const { name, locality, costForTwo, cuisines, sla } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  // console.log(resInfo?.data?.cards[0]?.card?.card?.info);

  // const { itemCards } =
  //   resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const itemCategory =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCategory);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-6/12 p-4 m-4 bg-red-50">
        <div className="font-bold text-3xl py-2">{name}</div>
        <div className="text-xs">{cuisines.join(",")}</div>
        <div className="text-xs">
          {locality} {","}
          <span>{sla.lastMileTravelString}</span>
        </div>
        <div>Cost for two Persons Rs/-{costForTwo / 100}</div>
      </div>
      <div className="w-6/12 p-4 m-4 bg-red-50">
        <div>
          {itemCategory.map((category, index) => (
            <RestaurentCategory
              key={index}
              data={category}
              showItemList={index === categoryIndex && showItemList}
              setCategoryIndex={() => setCategoryIndex(index)}
              setShowItemList={setShowItemList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
