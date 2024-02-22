import React from 'react'
import SideBar from '../components/sidebar/sidebar'
import NavBar from '../components/topBar/topbar'
import programming from '../../assets/images/laptop.png';
import graph from '../../assets/images/graph.png';
import plan from '../../assets/images/plan.png';
import study from '../../assets/images/study.png';
import '../main.css'
import './courses.css'
import { Link } from "react-router-dom";

export default function Courses() {
    return (
  
        <div className="home">
            <SideBar/>
            <div className="homeContainer">
              <NavBar/>
              <div className="page-content">
                 <div>
                    <div className="Seech"> <p id="sorti0">Search:</p>
                    <p id="sorti">Sort by:</p>
                    <p id="sorti2">Status:</p>
                    <p id="sorti3">Teacher:</p>
                    </div>
                    <div className="search-content">
                    <div className="search1">
                        <i className="search-icon fas fa-search"></i> 
                        <input type="text" className="search-input1" placeholder="Search in your courses" />
                    </div>
                    <div className="search2">
                        <i className="search-icon fas fa-search"></i> 
                        <input type="text" className="search-input1" placeholder="Latest" /> 
                    </div>
                    <div className="search3">
                        <i className="search-icon fas fa-search"></i> 
                        <input type="text" className="search-input1" placeholder="All Courses" />
                    </div>
                    <div className="search4"> 
                        <i className="search-icon fas fa-search"></i> 
                        <input type="text" className="search-input1" placeholder="All Teachers" />
                    </div>
                    </div>
                 <section className="fourth-section" id='courses'>
                        <div className="courses  ">
                        <div className="course flex flex-column flex-center-column">
                            <img src={programming} alt="" />
                            <div className="text-p">
                            <p className='bold'>Computer programming</p>
                            <p className='fade-text'>Introduction to python programming language</p>
                            </div>
                            <div className="long-line"></div>
                            <Link to='/watchcourses' className="button-containa"><button id='wad'>Watch Video</button><span className="completion-text">50% Completed</span></Link>
                        </div>
                        <div className="course flex flex-column flex-center-column">
                            <img src={graph} alt="" />
                            <div className="text-p">
                            <p className='bold'>Digital Marketing</p>
                            <p className='fade-text'>Introduction to Digital Marketing and Affiliate Sales</p>
                            </div>
                            <div className="long-line"></div>
                            <Link to='/watchcourses'><button id='wad'>Watch Video</button></Link>
                        </div>
                        <div className="course flex flex-column flex-center-column">
                            <img src={plan} alt="" />
                            <div className="text-p">
                            <p className='bold'>Data Science</p>
                            <p className='fade-text'>Introduction to Data Science and Machine Learning</p>
                            </div>
                            <div className="long-line"></div>
                            <Link to='/watchcourses' className="button-containa"><button id='wad'>Watch Video</button><span className="completion-text">50% Completed</span></Link>
                        </div>
                        <div className="course flex flex-column flex-center-column">
                            <img src={study} alt="" />
                            <div className="text-p">
                            <p className='bold'>SQL for newbies</p>
                            <p className='fade-text'>Font Properties Challenge 3</p>
                            </div>
                            <div className="long-line"></div>
                            <Link to='/watchcourses'><button id='wad'>Watch Video</button></Link>
                        </div>
                        </div>
                    </section>
                    <section className="fourth-section" id='courses'>
                        <div className="courses  ">
                        <div className="course flex flex-column flex-center-column">
                            <img src={programming} alt=""/>
                            <div className="text-p">
                            <p className='bold'>Complete Adobe Lightroom Megacourse</p>
                            <p className='fade-text'>Adding content to our Website </p>
                            </div>
                            <div className="long-line"></div>
                            <Link to='/watchcourses' className="button-containa"><button id='wad'> Watch Video</button><span className="completion-text">50% Completed</span></Link>
                        </div>
                        <div className="course flex flex-column flex-center-column">
                            <img src={graph} alt="" />
                            <div className="text-p">
                            <p className='bold'>Machine Learning A-Z<sup>TM</sup></p>
                            <p className='fade-text'>CSS Font Property Challenge Solution</p>
                            </div>
                            <div className="long-line"></div>
                            <Link to='/watchcourses'><button id='wad'>Watch Video</button></Link>
                        </div>
                        <div className="course flex flex-column flex-center-column">
                            <img src={plan} alt="" />
                            <div className="text-p">
                            <p className='bold'>Priemiere Pro CC for Beginners</p>
                            <p className='fade-text'>Adding Content to Our Website</p>
                            </div>
                            <div className="long-line"></div>
                            <Link to='/watchcourses' className="button-containa"><button id='wad'>Watch Video</button><span className="completion-text">50% Completed</span></Link>
                        </div>
                        <div className="course flex flex-column flex-center-column">
                            <img src={study} alt="" />
                            <div className="text-p">
                            <p className='bold'>Graphics Design Masterclass</p>
                            <p className='fade-text'>The Dark Art of Centering Elements</p>
                            </div>

                            <div className="long-line"></div>
                            <Link to='/watchcourses'><button id='wad'>Watch Video</button></Link>
                        </div>
                        </div>
                    </section>
                    <Link to='/watchcourses' style= {{textDecoration: 'none'}} className="nav-link">
                <li>
                    <span>Watch Video</span>
                </li>
            </Link>
                 </div>
              </div>
              <div className="number-count">
                <p></p>
              </div>
            </div>
        </div>
        
    )
}