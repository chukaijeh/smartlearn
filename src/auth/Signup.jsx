import googleIcon from '../assets/images/icons8-google-48.png';
import { Header } from './components/Header';
import { Link } from 'react-router-dom';
import { createAccount, googleSignup } from './services/auth';
import { useState } from 'react';
import "../assets/styles/App.css"
import './styles/auth.css';
import { GoogleLogin } from '@react-oauth/google';


function SignUp() {
  const [firstNameError, updateFirstNameError] = useState("")
  const [lastNameError, updateLastNameError] = useState("")
  const [emailError, updateEmailError] = useState("")
  const [userAccountSuccessful, updateUserAccountSuccessful] = useState("")
  const [passwordError, updatePasswordError] = useState("")
  const [isSignUp, updateisSignUp] = useState(false)
  async function validate(e) {
    updateEmailError("")
    updateFirstNameError("")
    updateLastNameError("")
    updatePasswordError("")
    const inputs = [...e.target];
    const values = inputs.map((i) => {
      if (i.className === 'inputfield') {
        return i.value
      }
    })
    const [firstname, lastname, email, passwd] = [...values]
    let condition = true;
    if (!firstname) {
      updateFirstNameError("Firstname cannot be empty")
      condition = false;
      updateisSignUp(false)
    }
    if (!lastname) {
      updateLastNameError("Lastname cannot be empty")
      condition = false;
      updateisSignUp(false)
    }
    if (email) {
      console.log("Email validated");
    }
    else {
      updateEmailError("Email field required")
      condition = false;
      updateisSignUp(false)
    }
    if (passwd && (passwd.length < 6)) {
      updatePasswordError("Password should have a minimum of 6 characters")
      condition = false;
      updateisSignUp(false)
    }
    if (!passwd) {
      updatePasswordError("Password field required")
      condition = false;
      updateisSignUp(false)
    }
    if (condition) {
      let res = await createAccount({ firstname, lastname, email, passwd })
      res.status ? updateUserAccountSuccessful(res.message) : updateEmailError(res.message)
      updateisSignUp(false)
      !res.status && updateUserAccountSuccessful('')
    }
  }
  return (
    <div className="auth">
      <Link to={"/"}>
        <Header />
      </Link>
      <div className="auth-main r-flex r-flex-column">
        <div className='bg-image main-common'>
          <div className='contain-text'>
            <h1>You're only one sign-up <br /> away from greatness!</h1>
            <p>Your destiny is calling, signup and discover what's possible</p>
          </div>
        </div>
        <div className='contain-form main-common'>
          <form onSubmit={function (e) {
            updateisSignUp(true)
            e.preventDefault()
            validate(e)
          }}>
            <h2>Sign up</h2>
            <p>Sign up and start your journey</p>
            <input type="text" placeholder='First name' className='inputfield' />
            <small>{firstNameError}</small>
            <input type="text" placeholder='Last name' className='inputfield' />
            <small>{lastNameError}</small>
            <input type="email" placeholder='Email' className='inputfield' />
            <small>{emailError}</small>
            <input type="password" placeholder='Pas*****' className='inputfield' />
            <small>{passwordError}</small>
            {
              isSignUp ? <input type="submit" id="submit" value={"authenticating..."} disabled /> : <input type="submit" id="submit" value={"Sign Up"} />
            }
            <div id="success">{userAccountSuccessful}</div>
            <div className="split">
              <div className="line"></div>
              <span className="center-text"> Or </span>
              <div className="line"></div>
            </div>
            <img src="https://icons8.com/icon/17949/google" alt="" />
            <GoogleLogin onSuccess={(res) => {
              googleSignup(res);
            }} onError={(resError) => {
              console.log(resError);
            }} className="google"></GoogleLogin>
            <p className='alt-login'>Already have an account ?
              <Link to="/auth/login" > Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
