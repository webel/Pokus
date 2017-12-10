import React from 'react';
import PropTypes from 'prop-types';
import LedLight from './LedLight';


const TOP = 270;
const degreeCircle = 360; 
const translation = 88;

// need nrOfLights > 0
const calculatePos = (nr, index) => {
	return (degreeCircle/nr*index+TOP)%degreeCircle;
};

const LightLayout = ({ breaky, interval, currentLED, numLights, on }) => {
	return (
		on &&
		<div style={{ position: 'relative', top: '7%', right: '-47%' }}>
			{
				[...Array(numLights)].map((x, i) =>
					<LedLight
						key={i}
						breaky={breaky}
						interval={interval / numLights}
						rotate={calculatePos(numLights, i)} // (degreeCircle/nrOfLights*i+TOP)%degreeCircle
						translate={translation}
						currentLED={i}
					/>)
			}
		</div>
	);
};

LightLayout.propTypes = {
	interval: PropTypes.number,
	numLights: PropTypes.number,
	on: PropTypes.bool,
	currentLED: PropTypes.number,
	illuminated: PropTypes.arrayOf(PropTypes.bool)
};

export default LightLayout;



//	
// might need -1 on nrOfLights
//			[...Array(this.state.numberOfLights)].map( (x, i) => 
//			<LedLight key={i} 
//				rotate={this.calculatePos(this.state.numberOfLights,i)} // (degreeCircle/nrOfLights*i+TOP)%degreeCircle
//				translate={translation} 
//			/>)
//		}
	

/*class Lights extends Components {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	generateDegreesFromTop(){
		let tmp = 0;

		for(var i = 1; i < this.props.numberOfLights; i++){
			tmp = (270 + (360/this.props.numberOfLights)*i)%360;
			this.props.positions.push(tmp);
		}
	}
	render(	
		lights.map(n => 
			<div style=
			{{
				transform: rotate({n}) translate({trans})
			}}
				className="led"/> 
		);
	)
};
const Light = ({position = 270, translate = 150}) => {
		transform: 'rotate('+position+')',
		transform: 'translate('+translate+')'
	};
	<div style={style}> </div>
}

Lights.defaultProps = {top: 270, trans: 150, numberOfLights: 6, positions: [], focusOn: true};
*/

// <div>
    //     <div id="start-timer">
    //         <p className="focus">focus</p>
    //     </div>

    //     <div id="camera">
    //         <div className="lens">
    //             <a href="#start-timer">
    //             <div className="btn hvr-push" onClick={btnClick}> </div>
    //             </a>
    //         </div>  

    //         <div className="led led1">
    //         </div>      

    //         <div className="led led2">
    //         </div>      

    //         <div className="led led3">
    //         </div>      

    //         <div className="led led4">
    //         </div>      

    //         <div className="led led5">
    //         </div>      

    //         <div className="led led6">
    //         </div>      

    //         <div className="shadow">
    //         </div>  

    //     </div>  
