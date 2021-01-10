import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HomeData extends React.Component {

    render(){
        const {posts} = this.props;
        return(
            <div className="card post">
                <div className="cardHeader">
                    <h2>{posts.title}</h2>
                    <div className="subinfo">
                        <h6><FontAwesomeIcon icon="calendar" className="icon"/>
                            {moment(posts.updated_at).format('LLL')}
                        </h6>
                        <h6><FontAwesomeIcon icon="flag" className="icon"/>{posts.type}</h6>
                    </div>
                </div>
                <hr />
                <div className="cardBody">
                    <p>{posts.description}</p>
                    <button className="secondary"><FontAwesomeIcon icon="book-open" className="icon"/>Read More</button>
                </div>
                <hr />
                <div className="cardFooter end">
                    <button className="primary"><FontAwesomeIcon icon="share" className="icon"/>Share</button>
                    <div className="action2">
                        <button className="secondary2"><FontAwesomeIcon icon="tags" className="icon"/>Tags</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeData;