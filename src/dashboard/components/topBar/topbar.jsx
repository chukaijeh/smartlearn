import React from "react";
import "./topbar.css";
import user from '../../../assets/images/user-image.png'
import notificationBell from '../../../assets/images/notification-bell.png'

const NavBar = () => {
    return (
      <div className="navbar">
        <div className="wrapper">
           <div>
           <div className="search-container">
          <i className="search-icon fas fa-search"></i> 
          <input type="text" className="search-input" placeholder="Search anything" />
          </div>
           </div>
            <div className="navIconbar">
                <ul className="Iconbar">
                    <li><img src={notificationBell} alt="user" /></li>
                    <li><img src={user} alt="user" /></li>
                    <li className="navName">Archies Alexander</li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
  
export default NavBar;