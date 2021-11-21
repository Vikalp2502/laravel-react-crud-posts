import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Rightbar from "./Rightbar";

class EditPosts extends React.Component {
    state = {
        title: '',
        type: '',
        description: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    updatePost = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/addPost/${id}`, this.state);
        if(res.data.status === 200){
            this.props.history.push("/dashboard");
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`/addPost/${id}/edit`);
        this.setState({title: res.data.posts.title});
        this.setState({type: res.data.posts.type});
        this.setState({description: res.data.posts.description});
    }

    render(){
        return(
            <div className="layout">
                <div className="sidebar">
                    <h1>Update</h1>
                    <h1>Your Posts</h1>
                    <div className="actionBtn">
                    <button className="active"><Link to="/"><FontAwesomeIcon icon="home" className="icon"/>Home</Link></button>
                        <button className="active"><Link to="/dashboard"><FontAwesomeIcon icon="desktop" className="icon"/>Dashboard</Link></button>
                        <button className="unactive"><FontAwesomeIcon icon="pencil-alt" className="icon"/>Create Posts</button>
                    </div>
                </div>
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.updatePost}>
                            <div className="form-group">
                                <label className="top">Title:</label>
                                <input type="text" name="title" className="form-control highlight" 
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" className="form-control highlight" 
                                value={this.state.type} onChange={this.handleInput}
                                required>
                                    <option value="Technology">Technology</option>
                                    <option value="Programming">Programming</option>
                                    <option value="Design">Design</option>
                                    <option value="Development">Development</option>
                                    <option value="Creativity">Creativity</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea type="text" name="description" className="form-control highlight"
                                value={this.state.description} onChange={this.handleInput} 
                                placeholder="Write the Description" required/>
                            </div>
                            <button type="submit" className="primary">
                                <FontAwesomeIcon icon="plus" className="icon"/>
                                Edit Post
                            </button>
                        </form>
                    </div>
                </div>
                <Rightbar />
            </div>
        )
    }
}

export default EditPosts;