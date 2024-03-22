import React from 'react'
import './Mapimg.css'
import { FaPlay } from "react-icons/fa";

const Mapimg = ({item}) => {
  return (
    <div className='pic-cont'>
        <img src={item.image} className='pictures' />
        <p className="name">{item.name}</p>
        <p className='artist'>Artist</p>
        <button className="play-btn">
            <FaPlay className='play-icon'/>
        </button>
    </div>
  )
}

export default Mapimg