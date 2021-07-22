import React from 'react'
import './Profile.css'
import Navbar from './Navbar'
import { useGlobalContext } from './context'
import {auth} from './firebase'

const Profile = () => {

    const {user} = useGlobalContext()

    return (
        <div className='profile'>
            <Navbar />
            <div className='profile-body'>
                <h1>Edit Profile</h1>
                <div className="profile-userInfo">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar-logo'></img>
                    <div className="profile-details">
                        <h2>{user.email}</h2>
                        <div className="profile-subPlans">
                            <button className='signout' onClick={()=>auth.signOut()}>SignOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
