import React, { useState, useEffect } from 'react';

import axios from 'axios'

import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {
    axios.get(`https://restcountries.eu/rest/v2/all
    `).then(response=> {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [])

  const handleSearch = e => {
    e.preventDefault()
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      find countries: <input onChange={handleSearch} />
      {search ? <Countries countries={countries} search={search}/> : <div></div>}
    </div>
  );
}

export default App;
