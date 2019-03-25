import React from 'react'

const Form = ({values}) => {
  const {addContact, newName, newNumber, nameChange, numberChange} = values
  return (
    <form onSubmit={addContact}>
      <div>nimi: <input value={newName} onChange={nameChange} /></div>
      <div>numero: <input value={newNumber} onChange={numberChange} /></div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}
export default Form