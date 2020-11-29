import React from "react";

class Data extends React.Component {
    render(){
        const {posts} = this.props;
        return(
            <div className="card post">
                <div className="cardHeader">
                    <h2>{posts.title}</h2>
                    <h6>{posts.type}</h6></div>
                <hr />
                <div className="cardBody">
                    <p>{posts.description}</p>
                    <button className="secondary">Read More</button>
                </div>
                <hr />
                <div className="cardFooter end">
                    <button className="primary">Share</button>
                    <div className="action">
                        <button className="secondary2">Edit</button>
                        <button className="secondary2">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;