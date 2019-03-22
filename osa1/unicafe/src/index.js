import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({name, value}) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
  )

const Statistics = ({good, neutral, bad, avrg}) => {
  return (
    <table>
      <tbody>
        <Statistic name='hyvä' value={good} />
        <Statistic name='neutraali' value={neutral} />
        <Statistic name='huono' value={bad} />
        <Statistic name='yhteensä' value={good+neutral+bad} />
        <Statistic name='keskiarvo' value={avrg} />
        <Statistic name='positiivisia' value={good ? good/(good+neutral+bad)*100+'%' : ''} />
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avrg, setAvrg] = useState(0)

  const setStats = () => {
    const newAvrg = (good+bad*-1)/(good+bad+neutral+1)
    setAvrg(newAvrg)
  }

  const setValue = (set, val) => {
    set(val+=1)
    setStats()
  }

  const vote = (value) => {
    const handler = () => {
      switch(value){
        case 'hyva':
          setValue(setGood, good);
          break;
        case 'neutraali':
          setValue(setNeutral, neutral);
          break;
        case 'huono':
          setValue(setBad, bad);
          break;
        default:
          break;
      }
    }
    return handler
    // switch(text){
    //   case 'Hyvä': setGood(good += 1)
    //   break
    // }

  }

  return (
    <div>
      <h1>anna palautetta</h1>
      <button onClick={vote('hyva')}>Hyvä</button>
      <button onClick={vote('neutraali')}>Neutraali</button>
      <button onClick={vote('huono')}>Huono</button>
      <br />
      {good||bad||neutral ? <Statistics good={good} neutral={neutral} bad={bad} avrg={avrg} /> : 'Ei yhtään palautetta annettu'}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)