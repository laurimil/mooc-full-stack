import React from 'react'

const Country = ({country}) => {
  console.log(country)

  const languages = () => {
    const { languages } = country
    return languages.map(lang => {
      return <li>{lang.name}</li>
    })
  }
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <b>languages:</b>
      <ul>{languages()}</ul>
      <img alt='' src={country.flag} style={{height:100, width:100 }} />
    </div>
  )
}

export default Country