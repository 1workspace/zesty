import React, { Component } from 'react'

import OrchardGrid from './OrchardGrid'

const minFruit = 0
const maxFruit = 1000

const minSize = 18
const maxSize = 40

const minDM = 0
const maxDM = 100

class Block extends Component {
  constructor (props) {
    super(props)

    this.switchDisplay = this.switchDisplay.bind(this)

    this.state = {
      displayVal: 'fruit_quantity',
      min: minFruit,
      max: maxFruit
    }
  }

  switchDisplay (qual, min, max) {
    this.setState({
      displayVal: qual,
      min: min,
      max: max
    })
  }

  render () {
    return (
      <div>
        <span
          className='quality-selector'
          onClick={() =>
            this.switchDisplay('fruit_quantity', minFruit, maxFruit)
          }
        >
          {' '}
          Quantity{' '}
        </span>
        <span
          className='quality-selector'
          onClick={() =>
            this.switchDisplay('dry_matter_percentage', minDM, maxDM)
          }
        >
          {' '}
          Dry Matter %{' '}
        </span>
        <span
          className='quality-selector'
          onClick={() => this.switchDisplay('average_size', minSize, maxSize)}
        >
          {' '}
          Avg. Size{' '}
        </span>
        <OrchardGrid
          displayVal={this.state.displayVal}
          min={this.state.min}
          max={this.state.max}
        />
      </div>
    )
  }
}

export default Block
