import React from 'react'

import Part from './Part'

class Content extends React.Component {

  renderParts() {
    return this.props.parts.map(part => {
      return <p key={part.exercises}>{part.name} {part.exercises}</p>
    })
  }

  render() {
    const { parts } = this.props
    return (
      <div>
        {this.renderParts()}
        <br/>
        <h2>1.2 toteutus</h2>
        <Part part={parts[0]}/>
        <Part part={parts[1]}/>
        <Part part={parts[2]}/>
      </div>
    )
  }
}

export default Content