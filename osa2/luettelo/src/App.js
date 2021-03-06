import React, { useState, useEffect } from 'react'

import contactService from './services/contacts'

import List from './components/List'
import Search from './components/Search'
import Form from './components/Form'
import Notification from './components/Notification'
import './styles.css'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')
  const [ statusMessage, setStatusMessage ] = useState('')

  useEffect(() => {
    contactService.getAll(setPersons)
  }, [])

  const setStatus = ( name, status ) => {
    console.log(name, status)
    switch (status) {
      case 'new':
        setStatusMessage(`Yhteystietoihin lisätty ${name}`)
        break;
      case 'update':
        setStatusMessage(`Yhteystietoihin päivitetty ${name}`)
        break;
      case 'remove':
        setStatusMessage(`Yhteystiedoista poistettu ${name}`)
        break;
      default:
        setStatusMessage('Default')
    }
    setTimeout(()=> {setStatusMessage('')}, 3000)
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

    if(!newNumber) {
      alert('Et antanut numeroa')
      return null
    }
    const newPerson = { name: newName, number: newNumber }

    const found = persons.find(person => person.name === newName)

    let check
    if(found) {
      check = window.confirm('Henkilö löytyy listalta, haluatko päivittää numeron?')
    }
    if(check){
      const changed = { ...found, number: newNumber }
      contactService.update(changed, persons, setPersons)
        .then(res => {
          setStatus(res.name, 'update')
          reset()
        })
      return null
    }

    const contactAdded = contactService.addNew(newPerson, setPersons)
    contactAdded.then(res => {
      const newPersons = persons.concat(res)
      setPersons(newPersons)
      setStatus(newPerson.name, 'new')
      reset()
    }).catch(err => alert('operation failed'+err))
  }

  const removeContact = id => {
    contactService.remove(id, persons, setPersons)
      .then(res => {
        const person = persons.find(person => person.id === id )
        setStatus(person.name, 'remove')
      })
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
      {statusMessage ?
      <Notification message={statusMessage} />
      : <div></div> }
      Lisää nimi ja numero
      <Form values={{addContact, newName, newNumber, nameChange, numberChange}}/>
      <h2>Numerot</h2>
      <List persons={persons} search={newSearch} remove={removeContact} />
    </div>
  )
}

export default App