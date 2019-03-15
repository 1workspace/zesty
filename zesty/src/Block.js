import React, { Component } from 'react'

import OrchardGrid from './OrchardGrid'

class Block extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayVal: 'fruit_quantity'
    }
  }

  render () {
    return (
      <div>
        <span> Quantity </span>
        <span> Dry Matter % </span>
        <span> Avg. Size </span>
        <OrchardGrid displayVal={this.state.displayVal} />
      </div>
    )
  }
}

export default Block
