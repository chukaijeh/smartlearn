import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import '../main.css'
import './home.css'
import courses from '../../assets/images/home-courses.png'
import completedcourses from '../../assets/images/home-completed-courses.png'
import instructor from '../../assets/images/home-instructors.png'
import registeredcourses from '../../assets/images/home-registered-courses.png'
import biology from '../../assets/images/home-biology.png'
import chemistry from '../../assets/images/home-chemistry.png'
import mathematics from '../../assets/images/home-mathematics.png'
import physics from '../../assets/images/home-physics.png'
import scheduleclass from '../../assets/images/home-schedule-image.png'
import Modal from "@material-ui/core/Modal";
import Box from '@mui/material/Box';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #ff',
    boxShadow: 24,
    borderRadius: 8,
    p: 4,
  };

export default function Home() {
    const [open, setOpen] = React.useState(false)
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
    // Modal
    const closeModal = () => {
        setOpen(false)
    };
    const openModal = () => {
        setOpen(true)
    }
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        console.log(userId)
        const fetchData = async () => {
          try{
            const response = await fetch(`https://smart-learn-b3p2.onrender.com/api/users/profile/${userId}`);
            if(!response.ok) {
              throw new Error('failed to fetch data')
            }
            const jsonData = await response.json()
            setData(jsonData);
            setUser(jsonData.user);
            console.log(jsonData.user)
          } catch(error){
            setError('error fetching details');
          }
        };
        fetchData();
      
        }, [user._id]);
    // const userDetails = localStorage.getItem(userfirst)
    return (
        <div className="homee">
              <div className="page-content">
                 <div className='dasboard-header-div'>
                   <div><p className='home-dashboard-text'>Dashboard</p></div>
                   <div><button className='home-button'>Schedule class</button></div>
                 </div>
                 <div class="home-dashboard-statistics">
                    <div className='analytics-div'>
                        <img src={courses} alt="user" />
                        <div >
                            <p className='analytics-number'>20</p>
                            <p className='analytics-text'>Active Courses</p>
                        </div>
                    </div>
                    <div className='analytics-div'>
                        <img src={registeredcourses} alt="user" />
                        <div>
                            <p className='analytics-number'>100</p>
                            <p className='analytics-text'>Registered Courses</p>
                        </div>
                    </div>
                    <div className='analytics-div'>
                        <img src={completedcourses} alt="user" />
                        <div>
                            <p className='analytics-number'>15</p>
                            <p className='analytics-text'>Completed Courses </p>
                        </div>
                    </div>
                    <div className='analytics-div'>
                        <img src={instructor} alt="user" />
                        <div>
                            <p className='analytics-number'>120</p>
                            <p className='analytics-text'>Instructor</p>
                        </div>
                    </div>
                 </div>
                 {/* Start Learning */}
                 <div className='start-learning-div'>
                    <p className='start-learning-test'>Let’s start learning, {user.firstname}</p>
                    <div className='learning-course-div'>
                     <div className="course-div">
                      <img src={biology} alt="" className='home-image'  />
                      <div className="white-bg">
                        <p className='small-learning-text'>Introduction to plant biology</p>
                        <p className=''>Biology</p>
                        <div className="long-line"></div> 
                        <Link to="/video?q=tZE_fQFK8EY"><button className='course-btn'>Watch Video</button></Link> 
                      </div>
                     </div>
                     <div className="course-div">
                      <img src={chemistry} alt="" className='home-image' />
                      <div className="white-bg">
                        <p className='small-learning-text'>Chemical Pathways</p>
                        <p className=''>Chemistry</p>
                        <div className="long-line"></div>
                        <Link to="/video?q=bka20Q9TN6M"><button className='course-btn'>Watch Video</button></Link>
                      </div>
                     </div>
                     <div className="course-div">
                      <img src={physics} alt=""  className='home-image' />
                      <div className="white-bg">
                        <p className='small-learning-text'>Introduction to energy</p>
                        <p className=''>Physics</p>
                        <div className="long-line"></div>
                     <Link to="/video?q=b1t41Q3xRM8"><button className='course-btn'>Watch Video</button></Link>
                      </div>
                     </div>
                     <div className="course-div">
                      <img src={mathematics} alt="" className='home-image' />
                      <div className="white-bg">
                        <p className='small-learning-text'>Mathematical Equations</p>
                        <p className=''>Mathematics</p>
                        <div className="long-line"></div>
                        <Link to="/video?q=JbhBdOfMEPs"><button className='course-btn'>Watch Video</button></Link>
                      </div>
                     </div>
                 </div>
                 </div>
                {/* Extra Classes */}
                <div className="home-dashboard-statistics">
                    <div>
                        <p className='home-blue-text'>Schedule Extra Classes</p>
                        <p className='home-large-text'>Are you interested in scheduling an extra class?</p>
                        <p className='home-light-text'>Click the button below to get started on the process of <br></br>scheduling an extra class with a tutor!</p>
                        <div><button className='home-button' onClick={openModal}>Get started</button></div>
                    </div>

                    <div>
                        <img src={scheduleclass} alt="" className='schedule-image' />
                    </div>
                </div>
                 {/* Modal */}
                 <Modal onClose={closeModal} open={open} className='modal'>
                <>
                <Box sx={style}>
                    <div className='modal-div'>
                        <div>
                          <p>Schedule extra class</p>
                            <div>
                                <div className="dropdown">
                                    <p>Class name*</p>
                                    <input type="text" className="" placeholder="E.g Biology" />
                                </div>
                            </div>
                           
                            <div className="dropdown">
                                <p>Select Tutor</p>
                                <select>
                                    <option value="" disabled selected>Select from the available options</option>
                                    <option value="option1">Dr Khan Bolu</option>
                                    <option value="option2">Prof Ayedeji</option>
                                    <option value="option3">Mr Romos</option>
                                </select>
                            </div>
                            <div className="dropdown">
                            <p>Select duration</p>
                                <select>
                                 
                                    <option value="" disabled selected>Select from the available options</option>
                                    <option value="option1">11am - 1pm</option>
                                    <option value="option2">5am - 8am</option>
                                    <option value="option3">As you wish</option>
                                </select>
                            </div>
                            <div className="dropdown">
                            <p>Choose Date and time</p>
                                <select>
                                  
                                    <option value="" disabled selected>Select from the available options</option>
                                    <option value="option1">11am - 1pm</option>
                                    <option value="option2">5am - 8am</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div>
                                <p>Choose from the below option</p>
                            </div>
                        </div>
                    </div>
               </Box>
                </>
            </Modal>
              </div>  
        </div>
    )
}