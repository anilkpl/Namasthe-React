import { NavLink, useParams } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";

const RestarentCard = ({ rest }) => {
  const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    rest?.info;

  return (
    <NavLink className="overflow-hidden" to={`/restaurentmenu/${id}`}>
      <div className="p-4 w-[250px] h-[400px]  shadow-2xl bg-red-50 rounded-lg">
        <div>
          <img
            className="w-full h-[180px] rounded-md"
            src={RES_IMG_URL + cloudinaryImageId}
          />
        </div>
        <h2 className="my-2 text-lg font-medium">{name}</h2>
        <div className="break-all">{cuisines.join(",")}</div>
        <div className="py-1">{costForTwo}</div>
        <div>Rating : {avgRating}⭐</div>
      </div>
    </NavLink>
  );
};

export default RestarentCard;
