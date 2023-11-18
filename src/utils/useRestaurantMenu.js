import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) =>{
    
    const [resMenu, setResMenu] = useState(null);


    useEffect(()=>{
        fetchRestaurantMenu();
    },[])

    const fetchRestaurantMenu = async() =>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json.data);
        setResMenu(json?.data?.cards);
    }

    return resMenu;
}

export default useRestaurantMenu;