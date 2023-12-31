import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice.js";
// import { RES_IMG_URL } from "../utils/constants";

const ItemListMenu = ({ data }) => {
  const { description, name, price ,imageId,defaultPrice} = data.card.info;
  const dispatch = useDispatch()
  const handleClick = (e)=>{
    e.stopPropagation()
    dispatch(addItems(data))
  }
  return (
    <div className="border-b-2 border-gray-300 p-4 flex">
      <div className="w-9/12">
        <div className="font-normal text-md">{name}</div>
        <div>
          {"₹ "}
          {price / 100 || defaultPrice/100}
        </div>
        <div className="text-xs m-2">{description}</div>
      </div>
      <div className="w-3/12">
        <button onClick={handleClick} className="absolute bg-black text-white font-bold px-2 rounded-md hover:text-lg hover:text-green-200">ADD</button>
        <img className="h-28 w-32" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId} />
      </div>
    </div>
  );
};

export default ItemListMenu;
