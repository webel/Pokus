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

const LightLayout = ({ rest, interval, numLights, on }) => {
	this.led_interval = rest ? interval/numLights/5 : interval/numLights;
	return (
		on &&
		<div style={{ position: 'relative', top: '7%', right: '-47%' }}>
			{
				[...Array(numLights)].map((x, i) =>
					<LedLight
						key={i}
						rest={rest}
						interval={this.led_interval}
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
	illuminated: PropTypes.arrayOf(PropTypes.bool)
};

export default LightLayout;
