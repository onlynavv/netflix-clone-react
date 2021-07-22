import React,{useState,useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [showNav,setShowNav] = useState(false)

    const handleNavShow = () => {
        if(window.scrollY > 100){
            setShowNav(true)
        }else{
            setShowNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleNavShow)
        return()=>{
            window.removeEventListener('scroll',handleNavShow)
        }
    },[])

    return (
        <div className={`navbar ${showNav && 'navbar-black'}`}>
            <div className="navbar-container">
                <Link to='/'><img className='navbar-logo' src='https://pngimg.com/uploads/netflix/netflix_PNG25.png' alt='logo'></img></Link>
                <Link to='/profile'><img className='navbar-avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'></img></Link>
            </div>
        </div>
    )
}

export default Navbar
