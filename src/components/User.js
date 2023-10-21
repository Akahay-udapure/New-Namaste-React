import { useEffect } from "react";

const User = ({name, location, designation}) => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("UseEffect intwrver");
        },1000)

        return (()=>{
            // this is how we cleanup of the component in functional component like ComponentWillMount() function do in class component
            clearInterval(timer);
        })
    },[])
    console.log("render");
    return (
        <div className="user-card">
            <h3>Name: {name}</h3>
            <h3>Location : {location} </h3>
            <h3>Designation : {designation}</h3>
        </div>
    );
};

export default User;