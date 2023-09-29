import { NavLink} from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";

const RestarentCard = ({ rest }) => {
  const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    rest?.info;


  return (
    <NavLink className="overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300 " to={`/restaurentmenu/${id}`}>
      <div className="p-4 w-[250px] h-[400px]  shadow-2xl bg-red-50 hover:bg-rose-200 rounded-lg " >
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
