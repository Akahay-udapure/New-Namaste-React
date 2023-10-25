import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    //In this code the question is how can const variable is getting updated?
    // beacuse when first time component get render its new variiable with  value login as soon as setBtnNameReact gets called component will get re-renderd and btnNameReact is a new variable with the value Logout
    const [btnNameReact, setBtnNameReact] = useState("Login");
    // let btnName = "Login"; // this scenario not work thats why useState comes into picture
    const status = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                       Online Status : {status ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-item">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-item">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="nav-item">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <li>
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
                </ul>
            </div>
        </div>
    );
};

export default Header;
