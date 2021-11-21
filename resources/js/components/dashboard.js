import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Rightbar from "./Rightbar";
class dashboard extends React.Component {
    render(){
        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Your</h1>
                    <h1>Dashboard</h1>
                    <div className="actionBtn">
                        <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon"/>Home</Link></button>
                        <button className="unactive"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</button>
                        <button className="active"><Link to="/addPosts"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Posts</Link></button>
                    </div>
                </div>
                <div className="PostDiv">
                    <Posts />
                </div>
                <Rightbar />
            </div>
        )
    }
}

export default dashboard;