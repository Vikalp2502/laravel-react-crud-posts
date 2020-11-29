import React from "react";
import Logo from "../../logo.png";

const navbar = () => {
    return(
        <nav className="navbar navbarBg">
            <a className="navbar-brand" href="#">
            <img src={Logo} width="30" height="30" 
            className="d-inline-block align-top" alt="" loading="lazy" />
            Training and Placement Cell
            </a>
            <ul class="nav justify-content-end navUl">
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Register</a>
                </li>
            </ul>
        </nav>
    )
}

export default navbar;