import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(votesObject())

  const select = () => {
    let rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand)
  }

  const vote = () => {
    console.log(votes, selected, votes[selected])
    const newVotes = {...votes}
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const getBest = () => {
    const keys = Object.keys(votes)
    let best = 0
    let voted
    keys.forEach(key => {
      if(best<votes[key]){
        best = votes[key]
        voted = key
      }
    })
    return voted
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      {votes[selected] ? <p>Has {votes[selected]} votes</p>:<p>Has no votes</p>}
      <br />
      <h1>Anecdote with most votes</h1>
      { getBest() ?
      <div>
        {props.anecdotes[getBest()]}
        <p>Has {votes[getBest()]} votes</p>
      </div> : <div>No votes yet!</div>}
      <br />
      <button onClick={vote}>Vote</button>
      <button onClick={select}>Next anecdote</button>
    </div>
  )
}

const votesObject = () => {
  const objectSize = Object.keys(anecdotes).length
  const obj = {}
  for(let i=0;i<objectSize;i++){
    obj[i]=0
  }
  return obj
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)