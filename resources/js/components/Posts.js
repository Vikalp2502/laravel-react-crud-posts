import React from "react";
import Axios from "axios";
import Data from "./Data";
import HomeData from "./HomeData";

class Posts extends React.Component {
    state = {
        posts: [],
        loading: true,
    }
    fetchPosts = async () => {
        const res = await Axios.get("/addPost");
        if(res.data.status === 200){
            this.setState({posts: res.data.posts});
            this.setState({loading: false});
        }
    }
    componentDidMount(){
        this.fetchPosts();
    }

    deletePost = async (id) => {
        const res = await Axios.delete(`/addPost/${id}`);
        if(res.data.status === 200){
            this.fetchPosts();
        }
    }

    render(){
        if(this.state.loading){
            return <h1>Loading....</h1>
        }
        if(window.location.href === window.origin + "/dashboard"){
            return(
                <div>
                    {this.state.posts.map(posts => (
                        <Data posts = {posts} key={posts.id} deletePost = {this.deletePost}/>
                    ))}
                </div>
            )
        }
        return(
            <div>
                {this.state.posts.map(posts => (
                    <HomeData posts = {posts} key={posts.id}/>
                ))}
            </div>
        )
    }
}

export default Posts;