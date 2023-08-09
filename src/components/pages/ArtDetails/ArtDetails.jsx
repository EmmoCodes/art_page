import React, { useEffect, useState } from 'react'
import { apiLink } from '../../data/Api.js'
import { useParams } from 'react-router-dom'

function ArtDetails() {
  const [artItem, setArtItem] = useState([])
  const artId = useParams().id

  useEffect(() => {
    fetch(`${apiLink}/${artId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('something went wrong with fetch')
        }
        return response.json()
      })
      .then(response => setArtItem(response.data))
  }, [])

  if (!artItem.image_id) {
    return <p>Loading....</p>
  }

  return (
    <section className={'details'}>
      <img
        className={'art_img'}
        src={`https://www.artic.edu/iiif/2/${artItem.image_id}/full/843,/0/default.jpg`}
        alt=""
      />
      <p>Artist: {artItem.artist_title}</p>
      <h2>Artname: {artItem.title}</h2>
      <p>Date of release: {artItem.date_display}</p>
    </section>
  )
}

export default ArtDetails
