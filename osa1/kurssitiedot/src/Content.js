import React from 'react'

class Content extends React.Component {

  renderParts() {
    return this.props.parts.map(part => {
      return <p key={part.exercises}>{part.name} {part.exercises}</p>
    })
  }

  render() {
    return (
      <div>
        {this.renderParts()}
      </div>
    )
  }
}

export default Content