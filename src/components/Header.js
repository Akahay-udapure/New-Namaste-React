import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    //In this code the question is how can const variable is getting updated?
    // beacuse when first time component get render its new variiable with  value login as soon as setBtnNameReact gets called component will get re-renderd and btnNameReact is a new variable with the value Logout
    const [btnNameReact, setBtnNameReact] = useState("Login");
    // let btnName = "Login"; // this scenario not work thats why useState comes into picture
    console.log("header render");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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
