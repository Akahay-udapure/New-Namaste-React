import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const status = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        );
        const json = await data.json();

        const restaurantList =
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
                console.log(restaurantList);
        setListOfRestaurants(restaurantList);
        setFilteredList(restaurantList);
    };
    if(!status){
        return(
            <h1>You'r looks like offline... please check your internet connection...........</h1>
        )
    }
    
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex p-1">
                {/* Search */}
                <div className="">
                    <input
                        type="text"
                        className="border border-b-3 border-black p-1"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 m-4 bg-green-200 rounded-lg"
                        onClick={() => {
                            let filterRes = listOfRestaurants.filter((res) =>
                                (res?.info?.name)
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase()),
                            );
                            setFilteredList(filterRes);
                        }}>
                        Search
                    </button>
                </div>
                <div>
                    <button
                        className="px-2 py-2 m-4 bg-blue-200 rounded-lg"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter(
                                (res) => res?.info?.avgRating >= 4,
                            );
                            setFilteredList(filteredRes);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredList.map((restaurant) => (
                    <Link
                        to={"/restaurant/" + restaurant?.info?.id}
                        key={restaurant?.info?.id} className="res-link">
                        <RestaurantCard resData={restaurant?.info} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
