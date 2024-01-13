import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    return (
      <div className="body-container">
        <button>Hi</button>
          {/* <button className="filterBtn"
            onClick={() => {
              const filteredList = restaurantList.filter((res) => res.info.avgRating > 4);
              setRestaurantList(filteredList);
            }}>Top Rated Restaurant</button> */}
       {/* <div className="res-container">
          {
            restaurantList.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))
          }
  
        </div>  */}
      </div>
    )
  }

  export default Body;