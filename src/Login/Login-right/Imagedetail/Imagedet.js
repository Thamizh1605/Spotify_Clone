import React from 'react';
import './Imagedet.css';
import { MdVerified } from 'react-icons/md';
import { all_product } from '../../../Assets/login images/imagesrend';
import { FaPlay } from "react-icons/fa";

const Imagedet = ({ imageidd }) => {
  const filteredItem = all_product.find((item) => item.id === imageidd);


  if (!filteredItem) {
    return <div>No image found</div>; // Render if no image found
  }

  const musicIcons = filteredItem.musicicons || all_product[3].musicicons;

  return (
    <div>
      {/* <div className={`bannersection ${isBannerVisible ? 'show' : 'hide'}`} style={{ backgroundImage: `url(${filteredItem.image})` }}> */}
      <div className='bannersection'>

      <img src={filteredItem.image} className='banner-image' />
        <div className='inside-content'><p>
          <span>
            <MdVerified className="icon" />
          </span>
          Verified Artist 
        </p>
        <h1 style={{fontSize:"100px"}}>{filteredItem.name}</h1>
          </div>
      </div>

      <div className="play-btn-follow-btn">
        <button className="play-btns">
            <FaPlay className='play-icon'/>
        </button>
        <button className="follow">
          follow
        </button>
        <button className="moreopt">...</button>
      </div>
        <h3 style={{padding:"20px"}}>artist.popular-tracks</h3>
        
        <div className="artist-about">
          
          <div className='song-col'>
          {musicIcons.map((item, index) => (
            <div>

            
          <div className='rows-of-songs' key={index}>
            <p>{index + 1}</p>
            <img
              className='row-image'
              src={item.im}
              alt={`Music Icon ${index}`}
              
            />
            <p className='song-name'>{item.songname}</p>
            <div className="views">{item.views}</div>
            <div className="duration">{item.duration}</div>
            
          </div>
            {/* <hr style={{border:"none",width:"50%",background: "gray",height:"1px",marginLeft:"10px"}}/> */}

            
            
                        </div>

            ))}
          </div>


          <div className='about-artist'>
                <h2>About</h2>
                <img src={filteredItem.image} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti vel nisi ipsum veniam totam molestias beatae fugit illo. Earum, deleniti.</p>
            </div>
        </div>
        
      
    </div>
  );
};

export default Imagedet;
