import { Header } from "./components/Header";
import "./App.css"
import { Link } from "react-router-dom";

function Login(params) {
    return (<div>
        <Header />
        <div className="auth-main">
            <div className='bg-image main-common bg-image-lg'>
                <div className='contain-text'>
                    <h1>Login and let's make <br /> magic happen!</h1>
                    <p>Login and get started on all the exciting stuff</p>
                </div>
            </div>
            <div className='contain-form main-common'>
                <form action="/dashboard" method="get">
                    <h2>Sign in</h2>
                    <p>Enter your email address and password to securely log in to your smartlearn LMS.</p>
                    <input type="text" placeholder='Name, username or email' />
                    <input type="password" placeholder='pas*****' />
                    <input type="submit" id="submit" value={"Login"} />
                    <input type="checkbox" />
                    <p className='alt-login'>Don't have an account ?<Link to="/auth/signup" > Sign up</Link></p>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login;