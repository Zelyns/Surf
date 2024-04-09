import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.jpg'
import arrow_icon from '../assets/hand_icon.jpg'
import hero_image from '../assets/hero_image.jpg'

export const hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Neew arrivals only</h2>
            <div>
                <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}
