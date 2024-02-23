import React from 'react'
import SideBar from '../../components/sidebar/sidebar'
import NavBar from '../../components/topBar/topbar'
import YouTube from 'react-youtube';
import "../../main.css"
import './video.css'
import { useLocation } from 'react-router-dom';

export default function DashboardVideo() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const videoId = queryParams.get('q');
    // const videoId = 'qfUZBKDh9BY';

    // const biologyVideo = 'tZE_fQFK8EY'
    // const chemistryVideo ='bka20Q9TN6M'
    // const physicsVideo = 'b1t41Q3xRM8'
    // const mathematicsVideo = 'JbhBdOfMEPs'
    return (
  
        <div className="home">
            <SideBar/>
            <div className="homeContainer">
              <NavBar/>
              <div className="page-content">
                <div>
                    <div className='video-card-div'>
                        <div>
                            <h2 className='watch-video-text'>Watch Video</h2>
                            {videoId && <YouTube videoId={videoId} />}
                       </div>
                    </div>
                 
                </div>
              </div>
            </div>
        </div>
        
    )
}