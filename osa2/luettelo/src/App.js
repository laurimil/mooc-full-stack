import React, { useState, useEffect } from 'react'

import contactService from './services/contacts'

import List from './components/List'
import Search from './components/Search'
import Form from './components/Form'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')

  useEffect(() => {
    contactService.getAll(setPersons)
  }, [])

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

    if(!newNumber) {
      alert('Et antanut numeroa')
      return null
    }
    const newPerson = { name: newName, number: newNumber }

    const found = persons.find(person => person.name === newName)

    if(found){
      const changed = { ...found, number: newNumber }
      //alert()
      contactService.update(changed, persons, setPersons)
      reset()
      return null
    }

    const contactAdded = contactService.addNew(newPerson, setPersons)
    contactAdded.then(res => {
      const newPersons = persons.concat(res)
      setPersons(newPersons)
      reset()
    }).catch(err => alert('operation failed'+err))
  }

  const removeContact = id => {
    contactService.remove(id, persons, setPersons)
  }

  const search = e => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const reset = () => {
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Search search={search}/>
      Lisää nimi ja numero
      <Form values={{addContact, newName, newNumber, nameChange, numberChange}}/>
      <h2>Numerot</h2>
      <List persons={persons} search={newSearch} remove={removeContact} />
    </div>
  )

}

export default App