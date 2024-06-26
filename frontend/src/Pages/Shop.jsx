import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import Popular from '../components/Popular/Popular.jsx'
import Offers from '../components/offers/Offers.jsx'
import NewCollections from '../components/NewCollections/NewCollections.jsx'
import NewsLetter from '../components/NewsLetter/NewsLetter.jsx'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

