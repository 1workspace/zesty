import React, { Component } from 'react'
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
    return (
      <div>
        <p>This is the orchard grid. It shows {this.props.displayVal}</p>
        <div className='orchardGrid'>
          {this.state.gridData.map(block => {
            return <p> {block.bay_name} </p>
          })}
        </div>
      </div>
    )
  }
}

export default OrchardGrid
