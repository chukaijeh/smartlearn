import React from 'react'
import SideBar from './components/sidebar/sidebar'
import NavBar from './components/topBar/topbar'
import './main.css'
import Home from './home/home'

export default function Main() {
    return (
  
        <div className="home">
            <SideBar/>
            <div className="homeContainer">
              <NavBar/>
              <Home/>
            </div>
        </div>
        
    )
}
