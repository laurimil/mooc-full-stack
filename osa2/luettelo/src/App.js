import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ isListed, setIsListed ] = useState(false)

  const showPersons = () => {
    return persons.map(person => {
      return <p key={person.name}>{person.name}{person.number}</p>
    })
  }

  const nameChange = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  const numberChange = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const addContact = e => {
    e.preventDefault()
    let check = false
    persons.map(person => {
      if(person.name === newName){
        check = true
      }
    })
    if(check){
      alert(`${newName} on jo listalla`)
    } else {
      const newPerson = { name: newName, number: newNumber }
      const newPersons = persons.concat(newPerson)
      setPersons(newPersons)
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addContact}>
        <div>nimi: <input value={newName} onChange={nameChange} /></div>
        <div>numero: <input value={newNumber} onChange={numberChange} /></div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      {/* {isListed ? 'Henkilö on jo lisätty' : ''} */}
      <h2>Numerot</h2>
      {showPersons()}
    </div>
  )

}

export default App