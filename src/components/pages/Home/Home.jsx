import React, { useEffect, useState } from 'react'
import { apiLink } from '../../data/Api.js'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <header>
        <h1>Welcome to Artsy Fartsy</h1>
      </header>
      <section className={'landing_section'}></section>
      <Link className={'goto_art'} to={'/artwork'}>
        To our Artworks
      </Link>
    </>
  )
}

export default Home
