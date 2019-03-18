import React from 'react'

import Header from './Header'
import Content from './Content'
import Total from './Total'


const data = {
  course: 'Half Stack -sovelluskehitys',
  parts: [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]
}

const App = () => {

  const { parts, course } = data

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App