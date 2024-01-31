import React from 'react'
import logo from './assets/images/logo-dark.png';
import pupil from './assets/images/pupil.jpg';
import "./assets/styles/landing-page.css"
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className='App-main'>
      <nav>
        <header className="">
          <img src={logo} className="App-logo title" alt="logo" />
          <span className="App-title title">SmartLearn</span>
        </header>
        <ul>
          <li><Link to={"#"}>Home</Link>
          <div className="line"></div></li>
          <li><Link to={"#"}>Courses</Link>
          <div className="line"></div></li>
          <li><Link to={"#"}>Become An Instructor</Link>
          <div className="line"></div></li>
          <li><Link to={"#"}>Blog</Link>
          <div className="line"></div></li>
        </ul>
        <div className="btn">
          <Link to={"/auth/signup"}>
            <button className="signup">Sign up</button>
          </Link>
          <Link to={"/auth/login"}>
            <button className="signin">Sign in</button>
          </Link>
        </div>
      </nav>
      <section className="intro">
        <div className="contain-all">
          <div className="intro-text">
            <h1>Welcome to Smart<span style={{ color: "var(--primary-color)" }}>Learn</span> Smart-hub for Smart Kids</h1>
            <div className="intro-text-desc">
              <p>
                Our mission is bringing quality education and resources to out of school children from low income house-hold
              </p>
            </div>
          </div>
          <img src={pupil} alt="" />
        </div>
      </section>
    </div>
  )
}
