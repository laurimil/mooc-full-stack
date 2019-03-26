import React from 'react'

import Weather from './Weather'

const CountryDetail = ({country}) => {

  const languages = () => {
    const { languages } = country
    return languages.map(lang => {
      return <li key={lang.name}>{lang.name}</li>
    })
  }
  return (
    <div>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <b>languages:</b>
      <ul>{languages()}</ul>
      <img alt='' src={country.flag} style={{height:100, width:100 }} />
      <Weather capital={country.capital} />
    </div>
  )
}

export default CountryDetail