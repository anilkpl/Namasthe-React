import { useState, useEffect } from "react";
import RestarentCard from "./RestarentCard";
import { RES_API_URL } from "../utils/constants";
const Body = () => {
    const [restarentsList,setRestarentsList] = useState([])

    useEffect(()=>{
      fetchRestarentsList()
    },[])

    const fetchRestarentsList =async () => {
      const response = await fetch(RES_API_URL);
      const restData = await response.json()
      const resList = restData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      
      setRestarentsList(resList)
    }
    return (
      <div className="body-container">
        <div className="search-box">Search box</div>
        <div className="res-container">
          {
            restarentsList.map((rest)=><RestarentCard rest ={rest} />)
          }
        </div>
      </div>
    );
  };

  export default Body;