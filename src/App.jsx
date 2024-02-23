import React from 'react'
import logo from './assets/images/logo-dark.png';
import pupil from './assets/images/pupils.png';
import "./assets/styles/landing-page.css"
import { Link } from 'react-router-dom';
import school from './assets/images/school.png';
import graph from './assets/images/graph.png';
import plan from './assets/images/plan.png';
import study from './assets/images/study.png';
import instructor1 from './assets/images/instructor1.png';
import instructor2 from './assets/images/instructor2.png';
import instructor3 from './assets/images/instructor3.png';
import programming from './assets/images/laptop.png';
import lenovo from './assets/images/lenovo.png';
import lexmark from './assets/images/lexmark.png';
import microsoft from './assets/images/microsoft.png';
import google from './assets/images/google.png';
import netflix from './assets/images/netflix.png';
import youtube from './assets/images/youtube.png';
import verizon from './assets/images/verizon.png';
import slack from './assets/images/slack.png';
import instructor from './assets/images/instructor.png';

import ico1 from './assets/images/label.png';
import ico2 from './assets/images/business.png';
import ico3 from './assets/images/finance.png';
import ico4 from './assets/images/software.png';
import ico5 from './assets/images/business.png';
import ico6 from './assets/images/office.png';
import ico7 from './assets/images/marketing.png';
import ico8 from './assets/images/photography.png';
import ico9 from './assets/images/music.png';
import { HiBars3CenterLeft } from "react-icons/hi2";

function navigate(e) {
  const nav = document.querySelector(".nav-footer")
  nav.classList.toggle('appear')
}
export default function App() {
  const categories = [
    {
      logo: ico1,
      topic: 'Label',
      courses: '63, 746'
    },
    {
      logo: ico2,
      topic: 'Business',
      courses: '52, 822'
    },
    {
      logo: ico3,
      topic: 'Finace & Accounting',
      courses: '33, 841'
    },
    {
      logo: ico4,
      topic: 'IT & Software',
      courses: '22, 649'
    },
    {
      logo: ico5,
      topic: 'Personal Development',
      courses: '20, 126'
    },
    {
      logo: ico6,
      topic: 'Office Productivity',
      courses: '13, 932'
    },
    {
      logo: ico7,
      topic: 'Marketing',
      courses: '12, 068'
    },
    {
      logo: ico8,
      topic: 'Photography & Video',
      courses: '6, 196'
    },
    {
      logo: ico9,
      topic: 'Music',
      courses: '959'
    },
  ];
  return (
    <div className='App-main'>
      <nav className='r-flex-between'>
        <header className="">
          <img src={logo} className="App-logo title" alt="logo" />
          <span className="App-title title">SmartLearn</span>
        </header>
        <Menu />
        <div className="w-btn">
          <LoginButton />
        </div>
        <div className="bar">
          <HiBars3CenterLeft style={{ fontSize: "22px" }} onClick={navigate} />
        </div>
      </nav>
      <section className="intro" id='home'>
        <div className="contain-all">
          <div className="intro-text r-flex-column r-center-text">
            <h1>Welcome to Smart<span style={{ color: "var(--primary-color)" }}>Learn</span> Smart-hub for Smart Kids</h1>
            {/* <div className="intro-text-desc"> */}
            <p>
              Our mission is bringing quality education and resources to out of school children from low income house-hold
            </p>
            {/* </div> */}
            <div className="r-btn">
              <LoginButton />
            </div>
          </div>
          <img src={pupil} alt="" className='r-image-h' />
        </div>
      </section>
      <section className="categories">
        <h1>Browse Top Categories</h1>
        <div className="contain-categories">
          {
            categories.map((each) => {
              return (
                <div className="each-item r-flex-center-column r-flex-center-row">
                  <div className="ico">
                    <img src={each.logo} alt={each.topic} />
                  </div>
                  <div className="text">
                    <p>{each.topic}</p>
                    <small>{each.courses} Courses</small>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="last-text">
          <span>We have more category & subcategory. </span><a href={"#"} style={{ color: "var(--primary-color)" }}>Browse All</a>
        </div>
      </section>
      <section className="third-section" id='about'>
        <div className="contain-main r-flex-column">
          <div className="third-desc flex flex-center-row flex-column">
            <p>About Us</p>
            <h1>
              SmartLearn Free E-Learning Services To Help You Grow
            </h1>
            <p className="fade-text">
              It is hoped that SmartLearn can become a useful service in the future in the field of education
            </p>
          </div>
          <div className="third-img">
            <img src={school} alt="" />
          </div>
        </div>
      </section>
      <section className="fourth-section" id='courses'>
        <h1 id='firstheading'>Trending Courses</h1>
        <p className='fade-text' id='first-p'>Take a look at the trending courses for the week</p>
        <div className="courses  ">
          <div className="course flex flex-column flex-center-column">
            <img src={programming} alt="" />
            <div className="text-p">
              <p className='bold'>Computer programming</p>
              <p className='fade-text'>Introduction to python programming language</p>
            </div>
            <div className="long-line"></div>
            <button>Watch Video</button>
          </div>
          <div className="course flex flex-column flex-center-column">
            <img src={graph} alt="" />
            <div className="text-p">
              <p className='bold'>Digital Marketing</p>
              <p className='fade-text'>Introduction to Digital Marketing and Affiliate Sales</p>
            </div>
            <div className="long-line"></div>
            <button>Watch Video</button>
          </div>
          <div className="course flex flex-column flex-center-column">
            <img src={plan} alt="" />
            <div className="text-p">
              <p className='bold'>Data Science</p>
              <p className='fade-text'>Introduction to Data Science and Machine Learning</p>
            </div>
            <div className="long-line"></div>
            <button>Watch Video</button>
          </div>
          <div className="course flex flex-column flex-center-column">
            <img src={study} alt="" />
            <div className="text-p">
              <p className='bold'>SQL for newbies</p>
              <p className='fade-text'>Font Properties Challenge 3</p>
            </div>

            <div className="long-line"></div>
            <button>Watch Video</button>
          </div>
        </div>
      </section>
      <section className="fifth-section" id='instructor'>
        <div className="instructor">
          <h1 className='align-text'>Become an instructor</h1>
          <p className='align-text'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
          <button>Start Teaching</button>
          <img src={instructor} alt="become an instructor" />
        </div>
        <div className="instructor">
          <h1>Your teaching & earning steps</h1>
          <ol>
            <li className='flex flex-center-column'><span className='flex flex-center'>1</span>Apply to become instructor</li>
            <li className='flex flex-center-column'><span className='flex flex-center'>2</span>Build & edit your profile</li>
            <li className='flex flex-center-column'><span className='flex flex-center'>3</span>Create your new course</li>
            <li className='flex flex-center-column'><span className='flex flex-center'>4</span>Start teaching & earning</li>
          </ol>
        </div>
      </section>
      <section className="sixth-section">
        <div className="ontop">
          <h1 className='center-text'>Top instructor of the month</h1>
          <div className="teachers flex flex-center-row">
            <div className="teacher">
              <img src={instructor1} alt="" />
              <h5 className=" center-text">Devon Lane</h5>
              <p className=" fade- center-text">Software Engineer</p>
              <div className="ratings  flex flex-between"><span>4.6</span><span>148 students</span></div>
            </div>
            <div className="teacher">
              <img src={instructor2} alt="" />
              <h5 className="name center-text">Darell Steward</h5>
              <p className=" fade-text center-text">Marketer</p>
              <div className="ratings  flex flex-between"><span>4.9</span><span>500 students</span></div>
            </div>
            <div className="teacher">
              <img src={instructor3} alt="" />
              <h5 className="name center-text">Jane Cooper</h5>
              <p className=" fade-text center-text">Branding</p>
              <div className="ratings flex flex-between"><span>4.8</span><span>50 students</span></div>
            </div>
          </div>
          <div className="center-text th"><span className='fade-text'>Thousands of students waiting for an instructor. Start teaching & earning now! </span><a href="#" style={{ color: "var(--primary-color)" }}>Become Instructor</a></div>
          <div className="trusted-companies flex flex-around r-flex-column r-flex-center-column">
            <div className="trusted-companies-desc r-center-text">
              <h1>50+ trusted companies</h1>
              <p>Here's an overview of the numerous companies that trust us!</p>
            </div>
            <div className="trusted-companies-logo">
              <div className="companies-logo"><img src={youtube} alt="" /></div>
              <div className="companies-logo"><img src={netflix} alt="" /></div>
              <div className="companies-logo"><img src={slack} alt="" /></div>
              <div className="companies-logo"><img src={google} alt="" /></div>
              <div className="companies-logo"><img src={lenovo} alt="" /></div>
              <div className="companies-logo"><img src={verizon} alt="" /></div>
              <div className="companies-logo"><img src={lexmark} alt="" /></div>
              <div className="companies-logo"><img src={microsoft} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
      <footer id='blog'>
        <div className="contain-footer-items flex r-flex-column">
          <div className="aim">
            <img src={logo} alt="" width={30} height={20} /><span>SmartLearn</span>
            <p>Build and create dreams with <br />SmartLearn</p>
          </div>
          <aside className='flex flex-around flex-center-column'>
            <div className="social">
              <p>Social Media</p>
              <ul>
                <li><Link to={''}>Instagram</Link></li>
                <li><Link to={''}>Twitter</Link></li>
                <li><Link to={''}>LinkedIn</Link></li>
              </ul>
            </div>
            <div className="quick-links">
              <p>Quick Links</p>            <ul>
                <li><Link to={''}>Terms and conditions</Link></li>
                <li><Link to={''}>Faqs</Link></li>
              </ul>
            </div>
            <div className="contact">
              <p>Contact</p>
              <ul>
                <li><Link to={''}>Smartlearn@gmail.com</Link></li>
                <li><Link to={''}>+234-962-543-534</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </footer>
      <section className="copyright flex flex-center-column flex-around">
        <div className="contain-copyright">
          © Copyright SmartLearn 2024
        </div>
        <Menu />
      </section>
    </div>
  )
}
function Menu(params) {
  return (
    <ul className='nav-footer res-menu r-flex-column'>
      <li onClick={navigate}><a href={"#home"}>Home</a>
        <div className="line"></div></li>
      <li onClick={navigate}><a href={"#about"}>About</a>
        <div className="line"></div></li>
      <li onClick={navigate}><a href="#courses">Courses</a>
        <div className="line"></div></li>
      <li onClick={navigate}><a href={"#instructor"}>Become An Instructor</a>
        <div className="line"></div></li>
      <li onClick={navigate}><a href={"#blog"}>Blog</a>
        <div className="line"></div></li>
    </ul>
  )
}
function LoginButton(params) {
  return (
    <>
      <div className="btn">
        <Link to={"/auth/signup"}>
          <button className="signup">
            <div className="flow">
              <span>Sign up</span>
            </div>
            <span>Sign up</span>
          </button>
        </Link>
        <Link to={"/auth/login"}>
          <button className="signin">
            <div className="flow">
              <span>Sign in</span>
            </div>
            <span>Sign in</span>
          </button>
        </Link>
      </div>
    </>
  )
}