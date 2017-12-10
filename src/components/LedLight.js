import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
// inputs: 
// 		rotate: "#"
//		translate: "#"
// call by <Light rotate="#" translate="#" /> 

let fade = Radium.keyframes({
    '0%': {
        opacity: '0'
    },
    '100%': {
        opacity: '.9'
    }
});

const LedLight = (props) => 
	<div style={
		[{
			transform: 'rotate('+props.rotate+'deg) translate('+props.translate+'px)',
			animationDelay: (props.currentLED*props.interval*60)+'s',
			animationName: fade
		}, styles.led, props.breaky ? styles.break : styles.focus]}
	/*props.illuminated ? 'led' : ''*/
	></div>;

const styles = {
	led: {
		width: '14px',
		height: '14px',
		borderRadius: '50%',
		opacity: '0',
		position: 'absolute',

		animationDuration: '9s',
		animationFillMode: 'both'

	},

	focus: {
		backgroundColor: 'rgb(247, 98, 87)',
		boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #F44336 0 -1px 9px, rgb(244, 67, 54) 0 0px 9px'
	},

	break: {
		backgroundColor: 'rgb(0, 191, 176)',
		boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #7ED321 0 -1px 9px, #24DE9A 0 0px 9px'
	}
};


LedLight.propTypes = {
	rotate: PropTypes.number,
	translate: PropTypes.number,
	currentLED: PropTypes.number
};

export default Radium(LedLight);
