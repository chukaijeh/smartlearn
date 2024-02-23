import React from 'react'
import '../../main.css'
import './watchcourses.css'
import NavBar from '../../components/topBar/topbar'
import SideBar from '../../components/sidebar/sidebar'
import YouTube from 'react-youtube';

export default function Watchcourses() {
  const videoId = 'qfUZBKDh9BY';
    return (
  
        <div className="home">
        <SideBar/>
        <div className="homeContainer">
          <NavBar/>
          <div className="page-content">
          <div>
              <h2>Learn Computer</h2>
              <YouTube videoId={videoId} />
            </div>
          </div>
        </div>
    </div>
        
    )
}