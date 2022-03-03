import React from 'react'
import './Sidenav.css'
import { Link } from 'react-router-dom'

function Sidenav() {

  return (
    <div className='sidenav'>

<li><Link to="/about">
      About
    </Link></li>

    <li><Link to="/hobbys">
      Hobbys
    </Link></li>

    <li><Link to="/pictures">
      Pictures
    </Link></li>

    <li><Link to="/contact">
      Contact
    </Link></li>

  </div>

  )
}

export default Sidenav