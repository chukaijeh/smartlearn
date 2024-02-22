import React from "react";
import "./sidebar.css"
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo-dark.png'


const SideBar = () => {
    return (
      <div className="sidebar">
        <div className="top">
            <img src={logo} alt="logo" className="logo-main"/>
            <Link to="/" style={{textDecoration: 'none'}} className="nav-link"><span className="logo-text">SmartLearn</span></Link>
        </div>
        <div className="center">
            <ul>
            <Link to='/dashboard' style={{textDecoration: 'none'}} className="nav-link">
                <li>
                    <span>Home</span>
                </li>
            </Link>
                <Link to='/courses' style={{textDecoration: 'none'}}>
                    <li>
                        <span>Courses</span>
                    </li>
                </Link>
              <Link to='/live-class' style={{textDecoration: 'none'}}>
              <li>
                    <span>Live Class</span>
                </li>
              </Link>
               <Link to='/forum' style={{textDecoration: 'none'}}>
                <li> 
                    <span>Forum</span>
                </li>
               </Link>
                <Link to='/learning-report' style={{textDecoration: 'none'}}>
                <li>
                    <span>Learning report</span>
                </li>
                </Link>
               
            </ul>
        </div>
        <div className="buttom">
        <hr className="hr"/>
            <ul>
                <li>
                    <span>Settings</span>
                </li>
                <li>
                    <span>Logout</span>
                </li>
            </ul>
           
        </div>
      </div>
    );
  }
  
export default SideBar;