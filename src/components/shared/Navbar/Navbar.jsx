import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={'navbar'}>
      <p className={'navbar_logo'}>Artsy Fartsy</p>
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/artwork'}>Artwork</Link>
      </ul>
    </nav>
  )
}

export default Navbar
