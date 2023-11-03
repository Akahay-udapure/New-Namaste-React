import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData;
  
    return (
      <div className="m-4 p-4 w-[230px] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200">
        <img 
          className="rounded-lg hover:scale-105"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className=" font-bold py-2">{name}</h3>
        <h4 className="font-semibold">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold">{avgRating} stars</h4>
        <h4 className="font-semibold">{costForTwo}</h4>
        <h4 className="font-semibold">{20} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;