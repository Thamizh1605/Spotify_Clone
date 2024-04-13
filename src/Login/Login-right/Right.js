import React, { useState } from 'react'
import './right.css'
import { all_product } from '../../Assets/login images/imagesrend'
import Mapimg from './Mapimg/Mapimg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Imagedet from './Imagedetail/Imagedet';
import { Link } from 'react-router-dom';

const Right = () => {

  const [show,setShow]=useState(false)
  const [defaultlen,setDefaultlen]=useState(5)
  const [showbtn,setShowbtn]=useState('Show all')
  const [artistdetail,setArtistdetail]=useState(false)
  const [imageidd,setImageidd]=useState(null)
  function handleshow(){
    setShow(!show)
    setDefaultlen(!show?all_product.length:5)
    setShowbtn(showbtn==='Show all'?'Show less':'Show all')
  }

  return (
    <div>
      
    <div className='container-right'>

      <header className="head-right">
        <div className="l-r-btns">
          <button className='btns-lr' onClick={()=>{setArtistdetail(false)}}>&lt;</button>
          <button className='btns-lr'>&gt;</button>
        </div>
        <div className="signup-login">
          <Link to="signup">
          <button className="sign-up">Sign up </button>
          </Link>
          <Link to='login'>
          <button className="login-up">Login</button>

          </Link>
        </div>
      </header>

      {!artistdetail?(<div className="body-pics">
        <div className='body-pics-head'>
          <span>Popular artists</span>
          <button onClick={()=>{handleshow()}}>{showbtn}</button>
        </div>


        <div className="image-content">
          {all_product.slice(0,defaultlen).map((item)=>{
            return <Mapimg item={item} setArtistdetail={setArtistdetail} setImageidd={setImageidd} />
          })}
        </div>
      

      <div className="desc">
      <div className="writings">

        <ul className='list-alt'>
          <li><h4>Company</h4></li>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </ul>

        <ul  className='list-alt'>
          <li><h4>Communities</h4></li>
          <li>For Artists</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>

        <ul className='list-alt'>
          <h3>Useful Links</h3>
          <li>Support</li>
          <li>Free Mobile App</li>
        </ul>

      </div>
          <div className="desc-icons">
              <div className="inner-icons"><FaInstagram/></div>
              <div className="inner-icons"><FaTwitter/></div>
              <div className="inner-icons"><FaFacebookF/></div>
          </div>
      </div>
      <hr style={{'opacity':"0.2"}} />
          <p style={{'color':'darkgray','fontSize':"14px"}}>&copy;2024 Spotify AB</p>
      </div>):
      
      (
        <Imagedet imageidd={imageidd}/>
      )}
    </div>

    </div>

    
  )
}

export default Right