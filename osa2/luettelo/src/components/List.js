import React from 'react'

const List = ({persons, newSearch, remove}) => {

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
    return <p key={person.id}>{person.name} {person.number}<button onClick={()=>remove(person.id)}>poista</button></p>
  })
}
export default List