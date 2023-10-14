import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="search">
                {/* Search */}
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRes = listOfRestaurants.filter(
                            (res) => res.data.avgRating >= 4,
                        );
                        setListOfRestaurants(filteredRes);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.data.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
