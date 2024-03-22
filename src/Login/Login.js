import React from 'react'
import './Login.css'
import Left from './Login-left/left'
import Right from './Login-right/Right'

const Login = () => {
  return (
    <div className="main">
    <div className='login-page-cont'>
        <Left/>
        <Right/>
    </div>
    <footer>
      <div>
        <p className="p1">Preview of Spotify</p>
        <p className='p2'>Sign up to get unlimited songs and podcasts with occasional ads.No credit card needed.</p>
      </div>
      <button>Sign for free</button>
    </footer>
    </div>
  )
}

export default Login