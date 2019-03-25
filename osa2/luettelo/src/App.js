import React, { useState } from 'react'

import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

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
      return null
    })
    if(check){
      alert(`${newName} on jo listalla`)
    } else {
      const newPerson = { name: newName, number: newNumber }
      const newPersons = persons.concat(newPerson)
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
    }
  }

  const search = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter search={search}/>
      Lisää nimi ja numero
      <Form values={{addContact, newName, newNumber, nameChange, numberChange}}/>
      <h2>Numerot</h2>
      <Persons data={{persons, newSearch}}/>
    </div>
  )

}

export default App