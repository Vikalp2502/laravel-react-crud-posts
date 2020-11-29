import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";

class dashboard extends React.Component {
    render(){
        return(
            <div>
                <div className="sidebar">
                    <h1>Your</h1>
                    <h1>Dashboard</h1>
                    <div className="actionBtn">
                        <button className="unactive">Home</button>
                        <button className="unactive"><Link to="/">Dashboard</Link></button>
                        <button className="active"><Link to="/addPosts">Create Posts</Link></button>
                    </div>
                </div>
                <div className="PostDiv">
                    <Posts />
                </div>
                <div className="Greeting">
                </div>
            </div>
        )
    }
}

export default dashboard;