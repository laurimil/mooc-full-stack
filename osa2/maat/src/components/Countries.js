import React from 'react'

import Country from './Country'

const Countries = ({countries, search}) => {

  const renderCountries = () => {
    const filtered = countries.filter(country => {
      if(0<=country.name.toLowerCase().indexOf(search.toLowerCase())) {
        console.log('hit')
        return country
      }
      return null
    })
    if(filtered.length>10){
      return <p>Too many results</p>
    } else if (filtered.length===1){
      return <Country show={true} country={filtered[0]} />
    } else {
      return filtered.map(country => {
        return (
          <Country key={country.alpha2Code} country={country} show={false} />
          // <p key={country.alpha2Code}>{country.name}</p>
        )
      })
    }
  }
  return (
    renderCountries()
  )
}

export default Countries