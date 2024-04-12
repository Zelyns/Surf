import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Ofeers on Your Email</h1>
        <p>Subscride to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'/>
            <button>Subscride</button>
        </div>
    </div>
  )
}
export default NewsLetter