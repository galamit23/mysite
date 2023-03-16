import React from 'react'
import {Link} from 'react-router-dom'
// import './About.css'
import Logo from '../LOGO.png'
import img1 from '../Pictures/AmazingBurger.jpg'
import img2 from '../Pictures/FireBurger.jpg'

export default function About() {
  return (
    
    <div className='container'>
      <h2>קצת עלינו</h2>
      <img src={Logo} className='logo-about'/>
      <p className='discript1'>
        אספנו את מגוון המתכונים  הכי טעימים שיש
        וכל שעליכם לעשות זה לבחור את המנה לפי הקטגוריות ולפי הרמה 
        בסיום ההכנה תוכלו לשתף את המנה עם שאר המשתמשים
        ולהוסיף פידבק על החוויה
      </p>
      <div className='details'>
          <h4><Link to="#">MyCook10@gmail.com</Link></h4>
          <h4>יוסף פפר 9 פתח תקווה</h4>
          <h4>052-222-1234</h4>
          <h4>facebook</h4>
          <h4>instgram</h4>
      </div>
      <img src={img1} className="img1"/>
      <img src={img2} className="img2"/>
    </div>


  
  )
}
