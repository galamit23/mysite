import React from 'react'
import { Outlet , Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./Start.css"



export default function Start() {

  return (
    <div className='start'>
      <h2 className='start-title'>בחר סוג מנה</h2>
          <div className='start-btns'>
          <button className="btn">
              <Link className="nav-link" to='/meat'>בשרי</Link>
            </button>
            <button className="btn">
              <Link className="nav-link" to='/milk'>חלבי</Link>
            </button>
            <button className="btn">
               <Link className="nav-link"
                to='/start/vagen'>טבעוני</Link>
            </button>
            <button className="btn">
              <Link className="nav-link"
               to='/start/cobination'>ארוחות משולבות</Link>
            </button>
          </div>
      <Outlet/>
    </div>
  )
}
