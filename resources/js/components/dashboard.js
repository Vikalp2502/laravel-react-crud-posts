import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class dashboard extends React.Component {
    render(){
        return(
            <div>
                <div className="sidebar">
                    <h1>Your</h1>
                    <h1>Dashboard</h1>
                    <div className="actionBtn">
                        <button className="unactive"><FontAwesomeIcon icon="home" className="icon"/>Home</button>
                        <button className="unactive"><Link to="/"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                        <button className="active"><Link to="/addPosts"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Posts</Link></button>
                    </div>
                </div>
                <div className="PostDiv">
                    <Posts />
                </div>
                <div className="Greeting">
                    <h2>Good Evening!!</h2>
                    <h5>Hello, Welcome Back!. And Have A Nice Day</h5>
                    <button className="primary"><FontAwesomeIcon icon="calendar" className="icon"/>View Events</button>
                </div>
            </div>
        )
    }
}

export default dashboard;