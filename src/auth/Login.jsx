import { Header } from "./components/Header";
import "../assets/styles/App.css"
import "./styles/auth.css"
import { Link } from "react-router-dom";
import { loginAuth } from "./services/auth";
import { useState } from "react";

 function Login(params) {
    const [errorLogin, setErrorLogin] = useState(false)
    return (<div>
        <Link to={"/"}>
            <Header />
        </Link>        

        <div className="auth-main r-flex r-flex-column">
            <div className='bg-image main-common bg-image-lg'>
                <div className='contain-text'>
                    <h1>Login and let's make <br /> magic happen!</h1>
                    <p>Login and get started on all the exciting stuff</p>
                </div>
            </div>
            <div className='contain-form main-common'>
                <form onSubmit={async function(e){
                    e.preventDefault()
                    setErrorLogin(false)
                    const inputs = [...e.target];
                    const values = inputs.map((i) => {
                      if (i.className === 'inputfield') {
                        return i.value
                      }
                    })
                    const [email, password] = [...values]
                    // console.log(email, password);
                     const res = await loginAuth({email, password})
                     console.log(res);
                     if (res.status){
                        window.location.href = '/dashboard'; 
                     }
                     else{
                        setErrorLogin(true)
                     }
                }}>
                    <h2>Sign in</h2>
                    <p>Enter your email address and password to securely log in to your smartlearn LMS.</p>
                    <input type="text" placeholder='Name, username or email' className="inputfield"/>
                    <input type="password" placeholder='pas*****' className="inputfield"/>
                    <input type="submit" id="submit" value={"Login"} />
                    {
                        errorLogin &&  <div className="errorMessage">
                        Invalid Credentials
                    </div>
                    }

                    <input type="checkbox" />
                    <p className='alt-login'>Don't have an account ?<Link to="/auth/signup" > Sign up</Link></p>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login;