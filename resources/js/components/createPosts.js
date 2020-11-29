import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

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
            <div>
                <div className="sidebar">
                    <h1>Create</h1>
                    <h1>A New Posts</h1>
                    <div className="actionBtn">
                        <button className="unactive">Home</button>
                        <button className="active"><Link to="/">Dashboard</Link></button>
                        <button className="unactive"><Link to="/addPosts">Create Posts</Link></button>
                    </div>
                </div>
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
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <textarea type="text" name="description" className="form-control highlight"
                            value={this.state.description} onChange={this.handleInput} 
                            placeholder="Write the Description" required/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="primary" 
                            value="Add Post"/>
                        </div>
                    </form>
                </div>
                <div className="Greeting">
                </div>
            </div>
        )
    }
}

export default createPosts;