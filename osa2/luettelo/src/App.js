import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const showPersons = () => {
    return persons.map(person => {
      return <p key={person.name}>{person.name}</p>
    })
  }

  const valueChange = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  const addContact = e => {
    e.preventDefault()
    const newPerson = { name: newName}
    const newPersons = persons.concat(newPerson)
    setPersons(newPersons)
    setNewName('')
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addContact}>
        <div>
          nimi: <input value={newName} onChange={valueChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {showPersons()}
    </div>
  )

}

export default App