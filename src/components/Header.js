import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    //In this code the question is how can const variable is getting updated?
    // beacuse when first time component get render its new variiable with  value login as soon as setBtnNameReact gets called component will get re-renderd and btnNameReact is a new variable with the value Logout
    const [btnNameReact, setBtnNameReact] = useState("Login");
    // let btnName = "Login"; // this scenario not work thats why useState comes into picture
    const status = useOnlineStatus();

    const cartItems = useSelector((store)=> store.cart.items);
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="w-full flex justify-between bg-slate-900 text-white p-3">
            <div className="logo-container">
                <img className="w-20 rounded-lg" src={LOGO_URL} />
            </div>
            <div className="md:flex hidden items-center">
                <ul className="flex font-bold">
                    <li className="px-4 cursor-pointer">
                        Online Status : {status ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="/" className="nav-item">
                            Home
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="/about" className="nav-item">
                            About Us
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="/contact" className="nav-item">
                            Contact Us
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="/grocery" className="nav-item">
                            Grocery
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <li className="px-4 cursor-pointer">
                        <button
                            onClick={() => {
                                // btnName = "Logout" //this scenario not work thats why useState comes into picture
                                btnNameReact == "Login"
                                    ? setBtnNameReact("Logout")
                                    : setBtnNameReact("Login");
                            }}>
                            {btnNameReact}
                        </button>
                    </li>
                    <li className="px-4 cursor-pointer">{loggedInUser}</li>
                </ul>
            </div>
            <div className="md:hidden">
                <a href="#" className="text-4xl">
                    &#8801;
                </a>
            </div>
        </div>
    );
};

export default Header;
