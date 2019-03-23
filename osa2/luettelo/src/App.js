import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')

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
        return null
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

  const search = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const showPersons = () => {
    let filtered = persons
    if(newSearch){
      filtered = persons.filter(person => {
        const mem = person.name.toLowerCase()
        if(0<=mem.indexOf(newSearch.toLowerCase())){
          return person
        }
        return null
      })
    }
    return filtered.map(person => {
      return <p key={person.name}>{person.name} {person.number}</p>
    })
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      haku: <input onChange={search}/>
      <form onSubmit={addContact}>
        <div>nimi: <input value={newName} onChange={nameChange} /></div>
        <div>numero: <input value={newNumber} onChange={numberChange} /></div>
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