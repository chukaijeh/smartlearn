import googleIcon from '../assets/icons8-google-48.png';
import { Header } from './components/Header';
import { Link } from 'react-router-dom';
import './App.css';

function SignUp() {
  return (
    <div className="auth">
      <Header />
      <div className="auth-main">
        <div className='bg-image main-common'>
          <div className='contain-text'>
            <h1>You're only one sign-up <br /> away from greatness!</h1>
            <p>Your destiny is calling, signup and discover what's possible</p>
          </div>
        </div>
        <div className='contain-form main-common'>
          <form action="/dashboard" method="get">
            <h2>Sign up</h2>
            <p>Sign up and start your journey</p>
            <input type="text" placeholder='Your name' />
            <input type="email" placeholder='email' />
            <input type="tel" placeholder='tel' />
            <input type="password" placeholder='pas*****' />
            <input type="submit" id='submit' value={"Sign up"} />
            <div className="split">
              <div className="line"></div>
              <span className="center-text"> Or </span>
              <div className="line"></div>
            </div>
            <img src="https://icons8.com/icon/17949/google" alt="" />
            <button type="submit">
              <img src={googleIcon} alt="" value={""} width={25} height={25} />
              <span>Sign up with Google</span>
            </button>
            <p className='alt-login'>Already have an account ?
              <Link to="/auth/login" > Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
