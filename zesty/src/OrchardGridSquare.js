import React, { Component } from 'react'

class OrchardGridSquare extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const redIndex = Math.round((this.props.block.fruit_quantity - 500) / 5)
    const bgString = `rgb(${redIndex}%,0%,0%)`
    const OrchardGridSquareStyle = {
      display: 'inline-block',
      width: '100%',
      paddingBottom: '150%',
      background: bgString
    }
    return <span style={OrchardGridSquareStyle} />
  }
}

export default OrchardGridSquare
