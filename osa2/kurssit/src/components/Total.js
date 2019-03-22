import React from 'react'

const calc = (values) => {
  let i = 0
  values.forEach(value => {
    i+=value.exercises
  })
  return i
}
const Total = props => <p>yhteensä {calc(props.parts)} tehtävää</p>

export default Total