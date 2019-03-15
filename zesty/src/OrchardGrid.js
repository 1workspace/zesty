import React, { Component } from 'react'
import OrchardGridSquare from './OrchardGridSquare'

import { blocks } from './dummydata.json'

class OrchardGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gridX: 6,
      gridY: 4,
      gridData: blocks
    }
  }
  render () {
    const orchardGridStyle = {
      background: 'pink',
      display: 'grid',
      gridTemplateColumns: `repeat(${this.state.gridX}, 1fr)`
    }

    return (
      <div>
        <p>This is the orchard grid. It shows {this.props.displayVal}</p>
        <div className='orchardGrid' style={orchardGridStyle}>
          {this.state.gridData.map(block => {
            return <OrchardGridSquare block={block} />
          })}
        </div>
      </div>
    )
  }
}

export default OrchardGrid
