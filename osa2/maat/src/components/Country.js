import React, { useState } from 'react'

import CountryDetail from './CountryDetail'

const Country = ({country, show}) => {
  const [ showThis, setShow ] = useState(show)

  const toggleShow = () => {
    console.log('show')
    setShow(!showThis)
  }

  return (
    showThis
      ? <CountryDetail country={country} />
      : <p key={country.alpha2Code}>
          {country.name}
          <button onClick={toggleShow}>show</button>
        </p>
  )
}

export default Country