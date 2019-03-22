import React from 'react'

import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {

  const { parts, name } = props.course

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts}/>
      Hei
    </div>
  )
}
export default Course