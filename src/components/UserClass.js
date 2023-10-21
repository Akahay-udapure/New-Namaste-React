import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        //this is how we create state variables in class based component
        this.state = {
            userInfo:{
                name:"dummy",
                location:"dummy location"
            }
        };
        
    }

    render() {
        const { login, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h3>Name: {login}</h3>
                <h3>Location : {location} </h3>
                <h3>Designation : Software Developer</h3>
            </div>
        );
    }

    async componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Namaste React OP");
        },1000)
        const data = await fetch("https://api.github.com/users/Akahay-udapure");
        const json = await data.json();
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log("component didupdate");
    }

    componentWillUnmount(){
        //component will mount used to clear the this type of mess
        clearInterval(this.timer);
        console.log("component will munt");
    }
}



export default UserClass;
