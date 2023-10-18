import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&collection=96594&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
        );
        const json = await data.json();
        const restaurantList = json?.data?.cards?.filter(
            (res) =>
                res.card.card["@type"] ==
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        );
        setListOfRestaurants(restaurantList);
        setFilteredList(restaurantList);
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                {/* Search */}
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="filter-btn"
                        onClick={() => {
                            let filterRes = listOfRestaurants.filter((res) =>
                                (res?.card?.card?.info?.name)
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase()),
                            );
                            setFilteredList(filterRes);
                        }}>
                        Search
                    </button>
                </div>
                <div className="top-res">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter(
                                (res) => res?.card?.card?.info.avgRating >= 4,
                            );
                            setFilteredList(filteredRes);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container">
                {filteredList.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant?.card?.card?.info?.id}
                        resData={restaurant?.card?.card?.info}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
