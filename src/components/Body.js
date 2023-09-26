import { useState, useEffect } from "react";
import RestarentCard from "./RestarentCard";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [restarentsList, setRestarentsList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchRestarentsList();
  }, []);

  const onlineStatus = useOnlineStatus();
  
  if (onlineStatus === false)
    return (
      <center>
        <h2>
          🔴🔴Network is Offline Mode ,Plzzzz check your Internet Connection🔴🔴
        </h2>
      </center>
    );

  const fetchRestarentsList = async () => {
    const response = await fetch(RES_API_URL);
    const restData = await response.json();
    const resList =
      restData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(resList)
    setRestarentsList(resList);
    setFilteredList(resList);
  };

  return (
    <div className="body-container">
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Search Here"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);

            const filteredList = restarentsList?.filter((rest) =>
              rest?.info?.name
                ?.toLowerCase()
                .includes(filteredVal?.toLowerCase())
            );
            setFilteredList(filteredList);
            if (e.target.value == "") setFilteredList(restarentsList);
          }}
        />
      </div>
      <div className="res-container">
        {restarentsList?.length === 0
          ? Array(20)
              .fill("")
              .map((v, i) => <Shimmer key={i} />)
          : filteredList?.map((rest) => (
              <RestarentCard key={rest?.info?.id} rest={rest} />
            ))}
      </div>
    </div>
  );
};

export default Body;
