import React from 'react'
import './left.css'
import { FaSpotify } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { RiGlobalLine } from "react-icons/ri";

const left = () => {
  return (
    <div className='container1'>
        <div className="box-1">
            <p>
                < FaSpotify  className='icons-1' />
                <span>Spotify</span>
            </p>
            <ul className='ullist'>
                <li id="list">
                    <IoHomeOutline className='icons-1'/>
                    <span>Home</span>
                </li>
                <li id="list">
                    <CiSearch  className='icons-1'/>
                    <span>Search</span>
                </li>
            </ul>
        </div>

        {/* Box -2 ------------------------- */}
        <div className="box-2">
            <header className='header-left'>
                <p>
                <VscLibrary className='lib-icon'/>
                <span>Your Library</span>
                </p>
                <FaPlus style={{'cursor':'pointer'}} />
            </header>
            <main>
            <article className='article'>
                <div>
                <p className='first-line'>Create your first playlist</p>
                <p className='second-line'>It's easy,we'll help you</p>
                </div>
                <button>
                    Create playlist
                </button>
            </article>
            <article className='article'>
                <div>
                <p className='first-line'>Let's find some podcasts to follow</p>
                <p className='second-line'>We'll keep you updated on new episodes</p>
                </div>
                <button>
                   Browse podcasts
                </button>
            </article>
            </main>
            <div className="abouts">
                <div>

                <a href="#">Legal</a>
                <a href="#">Safety & Privacy Center</a>
                <a href="#">Privacy Policy</a>
                </div>
                <div>
                <a href="#">Cookies</a>
                <a href="#">About Ads</a>
                <a href="#">Accessibility</a>
                </div>
                <a href="#">Cookies</a>
            </div>
            <button className='Global-btn'>
                <RiGlobalLine />
                English
            </button>
        </div>

    </div>
  )
}

export default left