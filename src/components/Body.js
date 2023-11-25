import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const status = useOnlineStatus();

    const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.621055599465002&lng=73.8306423049214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        );
        const json = await data.json();
        const restaurantList =
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
        setListOfRestaurants(restaurantList);
        setFilteredList(restaurantList);
    };
    if (!status) {
        return (
            <h1 className=" font-bold text-2xl">
                You'r looks like offline... please check your internet
                connection...........
            </h1>
        );
    }

    const {loggedInUser, setUserName} = useContext(UserContext)
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
                <div className="px-2 py-2 m-3">
                    <input type="text" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} className="border border-b-3 border-black p-1"/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredList.map((restaurant) => (
                    <Link
                        to={"/restaurant/" + restaurant?.info?.id}
                        key={restaurant?.info?.id}
                        className="res-link">
                        {restaurant?.info?.promoted ? (
                            <RestaurantWithPromoted resData={restaurant?.info} />
                        ) : (
                            <RestaurantCard resData={restaurant?.info} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
