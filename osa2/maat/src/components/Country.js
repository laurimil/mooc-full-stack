import React, { useState } from 'react'

import CountryDetail from './CountryDetail'

const Country = ({country, show}) => {
  const [ showThis, setShow ] = useState(show)

  const toggleShow = () => {
    console.log('show')
    setShow(!showThis)
  }

  return (
    <div key={country.alpha2Code}>
      <p>{country.name}<button onClick={toggleShow}>{showThis ? 'hide' : 'show'}</button></p>
        {showThis
          ? <CountryDetail country={country} />
          : <div></div>}
    </div>

  )
}

export default Country