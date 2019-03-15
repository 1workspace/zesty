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
        <p style={{ color: 'white' }}>
          This is the orchard grid. Each rectangle represents a bay. The
          brighter the colour, the greater the {toString[this.props.displayVal]}{' '}
          per bay.
        </p>
        <div className='orchardGrid' style={orchardGridStyle}>
          {this.state.gridData.map(block => {
            return (
              <OrchardGridSquare
                key={block.bay_name}
                block={block}
                displayVal={this.props.displayVal}
                max={this.props.max}
                min={this.props.min}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

const toString = {
  fruit_quantity: 'the quantity of kiwifruit',
  dry_matter_percentage: 'the dry matter percentage',
  average_size: 'the average size'
}

export default OrchardGrid
