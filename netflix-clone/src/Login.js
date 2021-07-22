import React,{useState} from 'react'
import './Login.css'
import Signup from './Signup'

const Login = () => {

    const [signIn,setSignIn] = useState(false)

    return (
        <div className='login'>
            <div className='login-background'>
                <img className='login-logo' src='https://pngimg.com/uploads/netflix/netflix_PNG25.png' alt='login-logo'></img>
                <button className='login-button' onClick={()=>setSignIn(true)}>Sign In</button>

                <div className='login-gradient'></div>
            </div>
                {signIn ? <Signup /> : (

                <>
                    <div className='login-body'>
                    
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch Anywhere. Cancel anytime</h2>
                        <h3>Ready to watach? Enter your email to create or restart your membership</h3>
                        <div className='login-input'>
                            <form>
                                <input type='email'placeholder='Enter Email Address'></input>
                                <button className='login-startBtn' onClick={()=>setSignIn(true)}>GET STARTED</button>
                            </form>
                        </div>
                    
                    </div>
                </>

                ) }
        </div>
    )
}

export default Login
