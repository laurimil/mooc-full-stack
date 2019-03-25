import React from 'react'

const Persons = ({data}) => {
  const { persons, newSearch } = data

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
export default Persons