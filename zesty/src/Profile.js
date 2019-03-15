import React, { Component } from 'react'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <div className="container ">
  <div className="row">
    <div className="col">
  <div className="avatar">
  	<img className="zion-circle-avatar-lg" src="https://res.cloudinary.com/dozzyprzt/image/upload/w_200,h_200/v1539676315/scmqjy9qnj2akrvyxwq5.jpg" />
  </div>
    </div>
    <div className="description col">
	Name: Kate Marshall |
	Position: Prunning Worker
    </div>
  </div>
	
  <div className="row">
    <div className="col description">
  		<h2>Bay Summary: </h2>
    </div>
    <div className="description col">
Soils
The deep, yellow-brown loams of the Bay of Plenty are well-drained, but need regular nitrogen, phosphorus and potassium once the vines begin cropping. Orchards are usually fertilised in spring and early summer with 200 kilograms of nitrogen, 55 kilograms of phosphorus and 100–150 kilograms of potassium per hectare.

Shelter
Wind is a major limiting factor in establishing a kiwifruit orchard and growing high-quality fruit. Young and flowering shoots are easily damaged, and most orchards need protection from New Zealand’s persistent winds. In the 1970s and 1980s growers planted shelter belts of fast-growing trees, but increasingly they are building artificial windbreaks using polythene fabric.

Irrigation
On the drier East Coast, where annual rainfall is less than 1,000 millimetres, kiwifruit orchards need irrigation in summer. Elsewhere, young vines usually benefit from irrigation.
    </div>
  </div>
	
	<div className="row description">
		<h2>Key Factors: </h2>
		<li>
			dry matter percentage:  77%
		</li>
		<li>
			fruit_count:  2309
		</li>
		<li>
	Average Size:  32
		</li>
	</div>
  
</div>
	  
  }
}

export default Profile