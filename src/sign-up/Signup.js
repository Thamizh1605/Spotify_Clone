import React from 'react'
import './Singup.css'
import { FaSpotify } from 'react-icons/fa'
import Google from '../Assets/bannerimages/imagesbanner/Google.jpg'
import Facebook from '../Assets/bannerimages/imagesbanner/facebook.png'
import Apple from '../Assets/bannerimages/imagesbanner/Apple.jpeg'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='sign-cont'>
        <div className="spoti-icon">
            < FaSpotify  className='icons-i' />
            <span>Spotify</span>
        </div>
        <div style={{display:"flex",width:"100%",height:"100%",justifyContent:"center",padding:"50px"}}>

        <div className="signup-body">
            <h1>Sign up to start <br />listening</h1>

            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <label htmlFor="email">Email address</label>
            <input type="email" className='email' placeholder='name@domain.com' />
            <span className='ph'>Use phone number instead</span>

                
            </div>            
            <button className='next'>Next</button>

            <div className="hr">
                <hr />
                <p>or</p>
            </div>

            <div className="google-face-apple">
                <button className='btn-gfa'>
                    <img src={Google} alt="" className='gfa-icons'/>
                    <p>Sign up with Google</p>
                </button >
                <button className='btn-gfa'>
                    <img src={Facebook} alt="" className='gfa-icons'/>
                    <p>Sign up with Facebook</p>
                </button>
                <button className='btn-gfa'>
                    <img src={Apple} alt="" className='gfa-icons'/>
                    <p>Sign up with Apple</p>
                </button>
            </div>
            <hr/>
            <div className='alre-acc'>
                <p>Already have a account?
                    <Link to='/login'><span>Login</span></Link>
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Signup