import React from 'react'
import SideBar from '../components/sidebar/sidebar'
import NavBar from '../components/topBar/topbar'
import '../main.css'
import './courses.css'

export default function Courses() {
    return (
  
        <div className="home">
            <SideBar/>
            <div className="homeContainer">
              <NavBar/>
              <div className="page-content">
                 <p>Courses Page 1</p>
              </div>
            </div>
        </div>
        
    )
}