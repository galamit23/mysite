import React from 'react'
import { Outlet, Link} from 'react-router-dom'

export default function Meat() {

  return (
    <div className=''>
      <h2 className=''>בחר סוג בשר</h2>
            <button className="btn">
              <Link className="nav-link"
               to='/meat/burgers'>המבורגרים</Link>
            </button>
            <button className="btn">
              <Link className="nav-link" 
              to='/meat/steaks'>סטייקים</Link>
            </button>
            <button className="btn">
               <Link className="nav-link"
                to='/meat/entrecotes'>בשרים אנטריקוט</Link>
            </button>
            <button className="btn">
              <Link className="nav-link"
               to='/meat/picanhas'>בשרים פיקניות</Link>
            </button>
            <button  className="btn">
              <Link className="nav-link"
               to='/start'>חזור</Link>
            </button>
      <Outlet/>
    </div>
  )
}
