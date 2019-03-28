import axios from 'axios'

const getAll = setPersons => {
  axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
    .catch(err => console.log('Error feching all' + err))
}

const addNew = newPerson => {
  const request = axios.post('http://localhost:3001/persons', newPerson)

  return request.then(response => response.data)
}

const remove = id => {
  console.log(id)
}

export default { addNew, getAll, remove }