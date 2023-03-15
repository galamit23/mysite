import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../LOGO.png'
import './Home.css' 

export default function Home() {
  return (
    <div>
        <h2>ברוכים הבאים לאתר המתכונים שלנו!</h2>
        <img src={Logo} className='logo'/>
        <button className='home'><Link to='/start'>!התחל</Link></button>
        <p className='feed'>פיד של מנות בגלילה למטה</p>
    </div>


  )
}
