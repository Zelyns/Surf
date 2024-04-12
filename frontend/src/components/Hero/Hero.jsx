import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand-icon.png'
import arrow_icon from '../assets/right-arrow.png'
import hero_image from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Nouveaux arrivages uniquement</h2>
            <div>
                <div className="hero-hand-icon">
                <p>nouvelle</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collection</p>
            <p>pour tous</p>
            </div>
            <div className="hero-latest-btn">
                <div>Dernière collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero;
