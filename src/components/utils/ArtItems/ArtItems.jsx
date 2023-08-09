import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ArtItems({ art }) {
  return (
    <Link to={`/details/${art.id}`}>
      <div>
        <img
          className={'art_img'}
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt=""
        />
        <p>Artist: {art.artist_title}</p>
        <h2>Artname: {art.title}</h2>
        <p>Date of release: {art.date_display}</p>
      </div>
    </Link>
  )
}

export default ArtItems
