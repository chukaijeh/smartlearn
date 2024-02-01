import React from 'react'
import logo from './assets/images/logo-dark.png';
import pupil from './assets/images/pupils.png';
import "./assets/styles/landing-page.css"
import { Link } from 'react-router-dom';
import school from './assets/images/school.png';
import graph from './assets/images/graph.png';
import plan from './assets/images/plan.png';
import study from './assets/images/study.png';
import programming from './assets/images/laptop.png';
import ico1 from './assets/images/label.png';
import ico2 from './assets/images/business.png';
import ico3 from './assets/images/finance.png';
import ico4 from './assets/images/software.png';
import ico5 from './assets/images/business.png';
import ico6 from './assets/images/office.png';
import ico7 from './assets/images/marketing.png';
import ico8 from './assets/images/photography.png';
import ico9 from './assets/images/music.png';

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
      <section className="categories">
        <h1>Browse Top Categories</h1>
        <div className="contain-categories">
          {
            categories.map((each) => {
              return (
                <div className="each-item ">
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
      <section className="third-section">
        <div className="contain-main">
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
      <section className="fourth-section">
        <h1 id='firstheading'>Trending Courses</h1>
        <p className='fade-text' id='first-p'>Take a look at the trending courses for the week</p>
        <div className="courses">
          <div className="course">
            <img src={programming} alt="" />
            <p className='bold'>Computer programming</p>
            <p className='fade-text'>Introduction to python programming language</p>
            <div className="long-line"></div>
            <button>Watch Video</button>
          </div>
          <div className="course">
            <img src={graph} alt="" />
            <p className='bold'>Digital Marketing</p>
            <p className='fade-text'>Introduction to Digital Marketing and Affiliate Sales</p>
            <div className="long-line"></div>
            <button>Watch Video</button>
          </div>
          <div className="course">
            <img src={plan} alt="" />
            <p className='bold'>Data Science</p>
            <p className='fade-text'>Introduction to Data Science and Machine Learning</p>
            <div className="long-line"></div>
            <button>Watch Video</button>
          </div>
          <div className="course">
            <img src={study} alt="" />
            <p className='bold'>SQL for newbies</p>
            <p className='fade-text'>Font Properties Challenge 3</p>
            <div className="long-line"></div>
            <button>Watch Video</button>
          </div>
        </div>
      </section>
    </div>
  )
}
