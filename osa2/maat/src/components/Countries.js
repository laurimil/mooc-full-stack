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
      return <Country country={filtered[0]} />
    } else {
      return filtered.map(country => {
        return (
          <p key={country.alpha2Code}>{country.name}, {country.alpha3Code}, population: {country.population}</p>
        )
      })
    }
  }
  return (
    renderCountries()
  )
}

export default Countries