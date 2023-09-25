import { useState, useEffect } from "react";
import RestarentCard from "./RestarentCard";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restarentsList, setRestarentsList] = useState([]);
  const [filteredVal, setFilteredVal] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchRestarentsList();
  }, []);

  const fetchRestarentsList = async () => {
    const response = await fetch(RES_API_URL);
    const restData = await response.json();
    const resList =
      restData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestarentsList(resList);
    setFilteredList(resList);
  };

  return (
    <div className="body-container">
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Search Here"
          value={filteredVal}
          onChange={(e) => {
            setFilteredVal(e.target.value);
            console.log(e.target.value);
            const filteredList = restarentsList.filter((rest) =>
              rest?.info?.name
                ?.toLowerCase()
                .includes(filteredVal.toLowerCase())
            );
            setFilteredList(filteredList);
            if (e.target.value == "") setFilteredList(restarentsList);
          }}
        />
      </div>
      <div className="res-container">
        {restarentsList.length === 0
          ? Array(20)
              .fill("")
              .map((v,i) => <Shimmer key={i}/>)
          : filteredList.map((rest) => (
              <RestarentCard key={rest?.info?.id} rest={rest} />
            ))}
      </div>
    </div>
  );
};

export default Body;
