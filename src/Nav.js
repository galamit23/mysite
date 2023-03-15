import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import "./Nav.css"

export default function Nav() {
  return (
    <>
      <nav className="navbar">
       <ul className='ulList'>
            <li> <Link className="nav-link" to='/'>דף הבית</Link></li>
            <li> <Link className="nav-link" to='/about'>אודות</Link></li>
            <li> <Link className="nav-link" to='/login'>התחברות</Link></li>
            <li> <Link className="nav-link" to='/myrecipe'>המתכונים שלי</Link></li>
            <li> <Link className="nav-link" to='/contacus'>צור קשר</Link></li>
            <li> <Link className="nav-link" to='/start'>!התחל</Link></li>
       </ul>    
      </nav>
      <Outlet/>
    </>
  )
}
