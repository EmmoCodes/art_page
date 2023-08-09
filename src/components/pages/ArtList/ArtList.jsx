import React, { useEffect, useState } from 'react'
import { apiLink } from '../../data/Api.js'
import ArtItems from '../../utils/ArtItems/ArtItems.jsx'

function ArtList() {
  const [artItems, setArtItems] = useState([])

  useEffect(() => {
    fetch(apiLink)
      .then(response => {
        if (!response.ok) {
          throw new Error('something went wrong with fetch')
        }
        return response.json()
      })
      .then(response => setArtItems(response.data))
      .catch(error => console.log(error.message))
  }, [])
  console.log(artItems)

  return (
    <section className={'img_grid'}>
      {artItems.map(art => (
        <ArtItems key={art.id} art={art} />
      ))}
    </section>
  )
}

export default ArtList
