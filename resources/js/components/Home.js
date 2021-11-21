import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Rightbar from "./Rightbar";
class Home extends React.Component {
    render(){
        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Your</h1>
                    <h1>All Posts</h1>
                    <div className="actionBtn">
                        <button className="unactive"><FontAwesomeIcon icon="home" className="icon"/>Home</button>
                        <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
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

export default Home;