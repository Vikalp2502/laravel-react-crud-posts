import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Posts from "./Posts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class createPosts extends React.Component {
    state = {
        title: '',
        type: '',
        description: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addPost", this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
        }
    }

    render(){
        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Create</h1>
                    <h1>A New Posts</h1>
                    <div className="actionBtn">
                        <button className="unactive"><FontAwesomeIcon icon="home" className="icon"/>Home</button>
                        <button className="active"><Link to="/"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                        <button className="unactive"><Link to="/addPosts"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Posts</Link></button>
                    </div>
                </div>
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.savePost}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" name="title" className="form-control highlight" 
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" className="form-control highlight" 
                                value={this.state.type} onChange={this.handleInput}
                                required>
                                    <option value="Announcement">Announcement</option>
                                    <option value="Selection">Selection</option>
                                    <option value="Placement">Placement</option>
                                    <option value="Training">Training</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea type="text" name="description" className="form-control highlight"
                                value={this.state.description} onChange={this.handleInput} 
                                placeholder="Write the Description" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="primary">
                                    <FontAwesomeIcon icon="plus" className="icon"/>
                                    Add Post
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="divider">
                        <h2>Your Posts</h2>
                    </div>
                    <Posts />
                </div>
                <div className="right-sidebar">
                    <div className="Greeting">
                        <h2>Good Evening!!</h2>
                        <h5>Hello, Welcome Back!. And Have A Nice Day</h5>
                        <button className="primary"><FontAwesomeIcon icon="calendar" className="icon"/>View Events</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default createPosts;