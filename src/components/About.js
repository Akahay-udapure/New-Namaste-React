import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
        // console.log("Parent Constructer");
    }

    render(){
        // console.log("Parent Render");
        return (
            <div className="font-bold p-10 text-2xl">
                <h1>About Us Page</h1>
                <UserContext.Consumer>
                    {
                        (({loggedInUser})=>{
                            return <h1>{loggedInUser}</h1>
                        })
                    }
                </UserContext.Consumer>
                {/* <UserClass name="Akshay Udapure (class)" location="Nagpur" designation="Software Developer"/> */}
                <User name="Akshay Udapure (functional)" location="Nagpur" designation="Software Developer"/>
            </div>
        )
    }

    componentDidMount(){
        // console.log("Parent Component DidMount");
    }
}

export default About;