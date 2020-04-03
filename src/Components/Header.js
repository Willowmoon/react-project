import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navText">Launch</h1>
        </Link>
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <h2 className="navText">Gallery</h2>
        </Link>
        <Link to="/timeline" style={{ textDecoration: "none" }}>
          <h2 className="navText">Timeline</h2>
        </Link>
      </nav>
    )
}

export default Header
