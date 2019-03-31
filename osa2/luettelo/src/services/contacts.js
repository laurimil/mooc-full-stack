import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = setPersons => {
  axios
    .get(baseUrl)
    .then(response => setPersons(response.data))
    .catch(err => console.log('Error feching all' + err))
}

const addNew = newPerson => {
  const request = axios.post(baseUrl, newPerson)

  return request.then(response => response.data)
}

const update = (changed, persons, setPersons) => {
  const request = axios.put(`${baseUrl}/${changed.id}`, changed)
  return request.then(res => {
      const newPersons = persons.map(person => person.id !== changed.id ? person : res.data)
      setPersons(newPersons)
      return res.data
    })
}

const remove = (id, persons, setPersons ) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(res => {
    const newPersons = persons.filter(person => person.id !== id ? person : null)
    setPersons(newPersons)
    return null
  }).catch(e => alert(e))
}

export default { addNew, getAll, update, remove }