import React from "react";
import {Link} from "react-router-dom";
import Logo from "./logo.png";

const navbar = () => {
    return(
        <nav className="navbar navbarBg">
            <Link className="navbar-brand" to="/">
            <img src={Logo}
            className="d-inline-block align-top Logo" alt="" loading="lazy" />
            </Link>
        </nav>
    )
}

export default navbar;