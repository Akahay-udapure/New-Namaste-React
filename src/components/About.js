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
            <div>
                <h1>About Us Page</h1>
                {/* <UserClass name="Akshay Udapure (class)" location="Nagpur" designation="Software Developer"/> */}
                <User />
            </div>
        )
    }

    componentDidMount(){
        // console.log("Parent Component DidMount");
    }
}

export default About;