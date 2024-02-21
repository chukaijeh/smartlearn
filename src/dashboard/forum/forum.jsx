import React from 'react'
import SideBar from '../components/sidebar/sidebar'
import NavBar from '../components/topBar/topbar'
import '../main.css'
import './forum.css'

export default function Forum() {
    return (
  
        <div className="home">
            <SideBar/>
            <div className="homeContainer">
              <NavBar/>
              <div className="page-content">
                 <p>Forum</p>
              </div>
            </div>
        </div>
        
    )
}