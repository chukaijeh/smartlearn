import React, {useState, useEffect} from "react";
import "./topbar.css";
// import userImage from '../../../assets/images/user-image.png'
import notificationBell from '../../../assets/images/notification-bell.png'
import { useParams } from "react-router-dom"; 

const NavBar = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(true);
  // const [userId, setUserId] = useState(null); 
  // const { userId } = useParams();


  const userImage = user.user_image.url;

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
        // setUserId(jsonData.user._id)
        setUser(jsonData.user);
        setloading(false)
        console.log(jsonData.user)
      } catch(error){
        setError('error fetching details');
        setloading(false)
      }
    };
    fetchData();
  
    }, [user._id]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="navbar">
        <div className="wrapper">
           <div>
           <div className="search-container">
            <i className="search-icon fas fa-search"></i> 
            <input type="text" className="search-input" placeholder="Search..." />
          </div>
           </div>
            <div className="navIconbar">
                <ul className="Iconbar">
                    <li><img src={notificationBell} alt="user" /></li>
                    <li><img src={userImage} alt="user" className="user-image"/></li>
                    <li className="navName">{user.firstname + ' ' + user.lastname}</li>
                </ul>
            </div>
            
        </div>
      </div>
    );
  }
  
export default NavBar;