import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const Weather = ({capital}) => {
  const [ weather, setWeather ] = useState()

  useEffect(()=> {
    Axios.get(`https://api.apixu.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${capital}`)
    .then(response => {
      setWeather(response.data.current)
      console.log(response.data.current)
    })
  },[])

  return (
    <div>
      <h2>Weather in {capital}</h2>
      {weather
        ? <div>
            <p><b>temperature: </b>{weather.temp_c}</p>
            <img alt='' src={weather.condition.icon} />
            <p><b>wind: </b>{weather.wind_kph} kph, direction: {weather.wind_dir}</p>
          </div>
        : <div></div>}
    </div>
  )
}

export default Weather