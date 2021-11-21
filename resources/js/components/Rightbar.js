import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Rigthar(){
    var greeting = "";
    var dt=new Date();
    var year = dt.getFullYear();
    var hour = dt.getHours();
    if( hour >= 1 && hour < 12){
        greeting = 'Good Morning!!';
    }
    if( hour >= 12 && hour < 19){
        greeting = 'Good Afternoon!!';
    }
    else{
        greeting = 'Good Evening!!';
    }
    return(
        <div className="right-sidebar">
            <div className="Greeting">
                <h2>{greeting}</h2>
                <h5>Hello, Welcome Back!. And Have A Nice Day</h5>
                <button className="primary"><FontAwesomeIcon icon="calendar" className="icon"/>View Events</button>
            </div>
            <div className="footer"><p className="p1">©️ {year}, <a className="link" href="#">SuperCrud</a></p></div>
        </div>
    )
}