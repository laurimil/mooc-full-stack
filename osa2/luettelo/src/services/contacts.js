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

  axios.put(`${baseUrl}/${changed.id}`, changed)
    .then(res => {
      const newPersons = persons.map(person => person.id !== changed.id ? person : res.data)
      setPersons(newPersons)
    })
}
const remove = (id, persons, setPersons ) => {
  axios.delete(`${baseUrl}/${id}`)
  .then(res => {
    const newPersons = persons.filter(person => person.id !== id ? person : null)
    setPersons(newPersons)
  }).catch(e => alert(e))
}

export default { addNew, getAll, update, remove }