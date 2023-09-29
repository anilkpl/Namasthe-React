import { useState, useEffect } from "react";
import RestarentCard from "./RestarentCard";
import { RES_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [restarentsList, setRestarentsList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [showApiError, setShowApiError] = useState("");

  useEffect(() => {
    fetchRestarentsList();
  }, []);

  const onlineStatus = useOnlineStatus();

  // console.log(restarentsList)

  if (onlineStatus === false)
    return (
      <center>
        <h2>
          🔴🔴Network is Offline Mode ,Plzzzz check your Internet Connection🔴🔴
        </h2>
      </center>
    );

  const fetchRestarentsList = async () => {
    try {
      const response = await fetch(RES_API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch swiggy API");
      }
      const restData = await response.json();
      const resList =
        restData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // console.log(restData);
      setRestarentsList(resList);
      setFilteredList(resList);
      setShowApiError("");
    } catch (error) {
      setShowApiError(error.message);
    }
  };

  if (showApiError !== "")
    return (
      <div className="text-center text-3xl">
        🔴{showApiError} swiggy data , Check it once🔴
      </div>
    );

  return (
    <div className="m-4">
      <div className="flex justify-center">
        <input
          className="w-[450px] p-1 m-2 text-center border-solid border-2 border-red-300 shadow-lg rounded-lg text-lg"
          placeholder="Search Here"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);

            const filteredList = restarentsList?.filter((rest) =>
              rest?.info?.name?.toLowerCase().includes(searchVal?.toLowerCase())
            );
            setFilteredList(filteredList);
            if (e.target.value == "") setFilteredList(restarentsList);
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center m-4 gap-6">
        {restarentsList?.length === 0
          ? Array(20)
              .fill("")
              .map((v, i) => (
                <div key={i} className="p-4 w-[250px] h-[400px] shadow-2xl rounded-md bg-red-50">
                  <Shimmer />
                </div>
              ))
          : filteredList?.map((rest) => (
              <RestarentCard key={rest?.info?.id} rest={rest} />
            ))}
      </div>
    </div>
  );
};

export default Body;
