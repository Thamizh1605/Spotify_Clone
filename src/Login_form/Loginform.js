import React from 'react'
import './Loginform.css'
import { FaSpotify } from 'react-icons/fa6'
import Google from '../Assets/bannerimages/imagesbanner/Google.jpg'
import Facebook from '../Assets/bannerimages/imagesbanner/facebook.png'
import Apple from '../Assets/bannerimages/imagesbanner/Apple.jpeg'
import { Link } from 'react-router-dom'


const Loginform = () => {
  return (
    <div className='login-contain'>
        <div className="spoti-icons">
            < FaSpotify  className='icons-i' />
            <span>Spotify</span>
        </div>
        <div className="login-body">
            <div className="login-head">
                <h1>Log in to Spotify</h1>
            </div>

            <div className="google-face-apple">
                <button className='btn-gfas'>
                    <img src={Google} alt="" className='gfa-icons'/>
                    <p>Sign up with Google</p>
                </button >
                <button className='btn-gfas'>
                    <img src={Facebook} alt="" className='gfa-icons'/>
                    <p>Sign up with Facebook</p>
                </button>
                <button className='btn-gfas'>
                    <img src={Apple} alt="" className='gfa-icons'/>
                    <p>Sign up with Apple</p>
                </button>
                <button className='btn-gfas a'>
                    <p>Continue with phone number</p>
                </button>
            </div>
            <hr className='hdr'/>

            <div className="username">
                <label htmlFor="user">Email or username</label>
                <input type="email" className='user' placeholder='Email or Username' />
                <label htmlFor="pass">Password</label>
                <input type="password" className='pass' placeholder='Password' />
                <div>
                    
                <input type="checkbox" id='checkbox' />
                <p>Remember me</p>
                </div>

                <button className='login-btn'>
                    Log in
                </button>
                <p className='pp'>Forgot your password</p>


            </div>
            <hr className='hdr'/>
            <div>
                <p >
                    Don't have an account? <Link to='/signup' ><span className='sp'>Sign up</span></Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Loginform