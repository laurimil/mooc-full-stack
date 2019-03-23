import React from 'react'

const reducer = (acc, cur) => {
  return acc + cur
}

const Total = props => <p>yhteensä {props.parts.map(obj => obj.exercises).reduce(reducer)} tehtävää</p>

export default Total