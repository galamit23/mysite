import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import "./Nav.css"

export default function Nav() {
  return (    
      <div className=''>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className='navbar-nav mr-auto'>
              <li> <Link className="nav-link" to='/'>דף הבית</Link></li>
              <li> <Link className="nav-link" to='/about'>אודות</Link></li>
              <li> <Link className="nav-link" to='/login'>התחברות</Link></li>
              <li> <Link className="nav-link" to='/myrecipe'>המתכונים שלי</Link></li>
              <li> <Link className="nav-link" to='/contacus'>צור קשר</Link></li>
              <li> <Link className="nav-link" to='/start'>!התחל</Link></li>
            </ul>    
          </nav>
        <Outlet/>
        </div>
      </div>
  )
}
