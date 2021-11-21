import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Data extends React.Component {
    delPost = (id) => {
        var con = confirm("Are You Want To Delete This Post");
        if(con == true){
            this.props.deletePost(id);
        }
    }
    render(){
        const {posts} = this.props;
        return(
            <div className="card post">
                <div className="cardHeader">
                    <div className="type">{posts.type}</div>
                    <p className="cardTitle">{posts.title}</p>
                    <div className="subinfo">
                        <h6>
                            {moment(posts.updated_at).format('LLL')}
                        </h6>
                        <div className="action">
                            <p className="edit"><Link to={`/edit/${posts.id}`}><FontAwesomeIcon icon="edit" className="icon"/>Edit</Link></p>
                            <p className="delete" onClick={() => this.delPost(posts.id)}><FontAwesomeIcon icon="trash-alt" className="icon"/>Delete</p>
                        </div>
                    </div>
                </div>
                <div className="cardBody">
                    <p className="description">{posts.description}</p>
                </div>
            </div>
        )
    }
}

export default Data;