import React, { Component } from 'react'

class OrchardGridSquare extends Component {
  render () {
    const { displayVal, min, max } = this.props

    const saturationPercentage = Math.round(
      ((this.props.block[displayVal] - min) / (max - min)) * 100
    )

    const bgString = setBgString(displayVal, saturationPercentage)

    const OrchardGridSquareStyle = {
      display: 'inline-block',
      width: '100%',
      paddingBottom: '150%',
      background: bgString
    }
    return <span style={OrchardGridSquareStyle} />
  }
}

function setBgString (displayVal, saturationPercentage) {
  switch (displayVal) {
    case 'fruit_quantity':
      return `rgb(${saturationPercentage}%, 0%, 0%)`
    case 'dry_matter_percentage':
      return `rgb(0%, ${saturationPercentage}%, 0%)`
    case 'average_size':
      return `rgb(0%, 0%, ${saturationPercentage}%)`
    default:
        return `rgb(${saturationPercentage}%, 0%, 0%)`
  }
}

export default OrchardGridSquare
