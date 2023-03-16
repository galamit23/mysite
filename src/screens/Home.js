import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../LOGO.png'
import './Home.css' 

export default function Home() {
  return (
    <div>
        <h2>ברוכים הבאים לאתר המתכונים שלנו!</h2>
        <img src={Logo} className='logo'/>
        <button type='button' className='btn btn-primary btn-lg'><Link className='nav-link' to='/start'>!התחל</Link></button>
        <p className='home-feed'>פיד של מנות בגלילה למטה</p>
    </div>


  )
}
