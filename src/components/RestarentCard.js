import { NavLink, useParams } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";

const RestarentCard = ({rest}) => {
  
  const {id,name,cloudinaryImageId,costForTwo,cuisines,avgRating} = rest?.info;

    return (
      <NavLink className="restMenuLink" to={`/restaurentmenu/${id}`}>
        <div className="card">
        <div className="res-image">
          <img src = {RES_IMG_URL + cloudinaryImageId}/>
        </div>
        <h2>{name}</h2>
        <div>{cuisines.join(",")}</div>  
        <div>{costForTwo}</div>
        <div>Rating : {avgRating}</div>
      </div>
      </NavLink>
    );
  };

  export default RestarentCard;