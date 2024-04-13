import React from 'react'
import './Mapimg.css'
import { FaPlay, FaUnsplash } from "react-icons/fa";


const Mapimg = ({item,setArtistdetail,setImageidd}) => {
  function handleimagedetail(imageid){
    setArtistdetail(true)
    setImageidd(imageid)
    

  }
  return (
    <div className='pic-cont' key={item.id} onClick={()=>{handleimagedetail(item.id)}}>
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