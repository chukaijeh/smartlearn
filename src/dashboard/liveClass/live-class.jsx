import React from 'react'
import SideBar from '../components/sidebar/sidebar'
import NavBar from '../components/topBar/topbar'
import '../main.css'
import './live-class.css'

export default function LiveClass() {
    return (
  
        <div className="home">
            <SideBar/>
            <div className="homeContainer">
              <NavBar/>
              <div className="page-content">
                 <p>Live Class</p>
              </div>
            </div>
        </div>
        
    )
}