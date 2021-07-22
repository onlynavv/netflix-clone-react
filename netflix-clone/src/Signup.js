import React,{useState} from 'react'
import './Signin.css'
import {auth} from './firebase'
import {useHistory} from 'react-router-dom'

const Signup = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [register,setRegister] = useState(false)
    const history = useHistory()

    const handleSignUpComp = () => {
        setRegister(true)
    }

    const handleSignUp = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
            console.log(authUser)
            history.push('/')
        }).catch((error)=>console.log(error.message))
    }

    const handleSignIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password).then((authUser)=>{
            console.log(authUser)
            history.push('/')
        }).catch((error)=>console.log(error.message))
    }

    return (
        <div className='signup'>
            {register ? (
                <form>
                <h1>Register</h1>
                <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                <button type='submit' onClick={handleSignUp}>Sign Up</button>
            </form>
            ) : (
                <form>
                <h1>Sign In</h1>
                <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                <button type='submit' onClick={handleSignIn}>Sign In</button>

                <h4>
                    <span className='signup-gray'>New to Netflix?</span>
                    <span className='signup-link' onClick={handleSignUpComp}>Sign Up Now</span>
                </h4>
            </form>
            )}
        </div>
    )
}

export default Signup
