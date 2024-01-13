import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0 " }}>
        <img className="foodImage" alt="food-image" src={CDN_URL + cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
      </div>
    )
}

export default RestaurantCard;