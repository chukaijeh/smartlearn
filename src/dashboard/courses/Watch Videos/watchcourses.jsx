import React from 'react'
import '../../main.css'
import './watchcourses.css'
import NavBar from '../../components/topBar/topbar'
import SideBar from '../../components/sidebar/sidebar'

export default function Watchcourses() {
    return (
  
        <div className="home">
        <SideBar/>
        <div className="homeContainer">
          <NavBar/>
          <div className="page-content">
             <p>Watch Courses</p>
          </div>
        </div>
    </div>
        
    )
}