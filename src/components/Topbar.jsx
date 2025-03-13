import "./Topbar.css";
import logo from "../assets/logo.jpg";
import user from "../assets/usergroup.png";
import React from "react";

import '@fortawesome/fontawesome-free/css/all.min.css';

const  Topbar=()=>{
    return(
    
        <div id="top-bar">
            <img src={logo} alt="logo" id="logo" />
            <div id="menu-btn">
            <i className="fas fa-bars"></i>
            </div>

            <div id="university-name">Masinde Muliro University of Science and Technology</div>
            <div id="right-section">
            <div id="notification">
                <i className="fas fa-bell"></i>
                <span id="badge">3</span>
            </div>
            <div id="user-profile">
                <img src={user} alt="User"/>
                <span id="user-name">Hi, Nick</span>
            </div>
        </div>
        </div>
        
        
    );
}

export default Topbar;