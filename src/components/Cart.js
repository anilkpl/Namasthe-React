import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemsList from "./CartItemsList.js";
import { CART_EMPTY_IMG_URL } from "../utils/constants.js";
import { NavLink } from "react-router-dom";
import  {clearItems}  from "../utils/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearItems());
  };

  return (
    <div>
      <div className="font-bold text-2xl m-4 flex flex-col justify-center items-center">
        {cartItems?.length !== 0 && (
          <button
            className="p-2 m-2 text-white bg-red-500 hover:bg-teal-500 rounded-lg"
            onClick={handleClick}
          >
            Clear Cart
          </button>
        )}
        {cartItems?.length === 0 ? (
          <div className="flex flex-col justify-center text-center items-center">
            <div className="my-2">
              <img className="w-[300] h-[300]" src={CART_EMPTY_IMG_URL} />
            </div>
            <div className="my-2">Your Cart is Empty</div>
            <div className="font-medium text-xs">
              You can go to home page to view more restaurants
            </div>
            <NavLink to="/">
              <button className="my-4 p-2 bg-red-200 rounded-lg hover:bg-teal-500">
                Goto HomePage
              </button>
            </NavLink>
          </div>
        ) : (
          cartItems?.map((item) => {
            return <CartItemsList key={item?.card?.info?.id} data={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
