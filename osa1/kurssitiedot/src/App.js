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
      <h1>{course}</h1>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>

      <p>yhteensä {parts[0].exercises + parts[1].exercises + parts[2].exercises} tehtävää</p>
    </div>
  )
}

export default App