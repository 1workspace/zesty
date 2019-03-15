import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OrchardGridSquare extends Component {
	

	handleProfile(e) {
		
	}
	
	
  render () {
    const { block, displayVal, min, max } = this.props

    const saturationPercentage = Math.round(
      ((this.props.block[displayVal] - min) / (max - min)) * 100
    )

    const bgString = setBgString(displayVal, saturationPercentage)
	
	const bayId = Math.floor(Math.random() * Math.floor(max))

    const OrchardGridSquareStyle = {
      display: 'inline-block',
      width: '100%',
      paddingBottom: '150%',
      background: bgString
    }
    return <div style={OrchardGridSquareStyle} >
<div className="row">
    <div className="bayId col-sm">
	BayId: {bayId}
    </div>
    
    <div className="bay-action col-sm">
      
		<Link className="link-profile" to='/profile'>Bay Profile</Link>
    </div>
  </div>
	</div>
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
