import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem } from '../utils/cartSlice';

const CartItemsList = ({data}) => {
  const { description, name, price ,imageId,defaultPrice,id} = data.card.info;
  const dispatch = useDispatch()
  const handleClick = ()=>{
    dispatch(removeItem(id))
  }
  return (
    <div className="border-b-2 w-6/12 border-gray-300 p-4 flex bg-red-50">
      <div className="w-9/12">
        <div className="font-normal text-md">{name}</div>
        <div>
          {"₹ "}
          {price / 100 || defaultPrice/100}
        </div>
        <div className="text-xs m-2">{description}</div>
      </div>
      <div className="w-3/12">
        <button onClick={handleClick} className="absolute bg-red-500 text-white text-sm font-bold px-2 rounded-md hover:text-lg">Remove</button>
        <img className="h-28 w-32" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId} />
      </div>
    </div>
  )
}

export default CartItemsList