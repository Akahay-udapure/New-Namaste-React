import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { json, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resMenu, setResMenu] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchRestaurantMenu();
    },[])

    const fetchRestaurantMenu = async() =>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResMenu(json?.data?.cards);
    }

    if(resMenu == null) return <Shimmer />;
    const itemList = resMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=> res.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const {name, cuisines, costForTwoMessage, avgRating} = resMenu[0]?.card?.card?.info
    return(
        <div>
            <h2>{name}</h2>
            <h4>{avgRating} Ratings</h4>
            <h4>{costForTwoMessage}</h4>
            <p>{cuisines.join(", ")}</p>
            <h4>Menu</h4>
            <ul>
                {
                    itemList[0]?.card?.card?.itemCards.map((res)=>(
                        <li key={res?.card?.info?.id}>{res?.card?.info?.name}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default RestaurantMenu;