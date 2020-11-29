import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import dashboard from "./dashboard";
import createPosts from "./createPosts";
import Navbar from "./navbar";
import "../../css/app.css";

function Example() {
    return (
        <Router>
        <>
        <Navbar />
            <Switch>
                <Route path="/" exact component={dashboard} />
                <Route path="/addPosts" exact component={createPosts} />
            </Switch>
        </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
