import React from 'react'

import Part from './Part'

const Content = (props) => {

  const renderParts = ( ) => {
    return props.parts.map(part => {
      return <Part key={part.exercises} part={part} />
    })
  }

  return (
    renderParts()
  )

}

export default Content