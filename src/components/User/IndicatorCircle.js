import React from 'react';
import Radium from 'radium';

const UserIndicatorCircle = ({status, illuminated, position}) => {
	return(
		<circle stroke={illuminated ? styles[status] : styles.gray} fill="#9A1818" cx={position} cy="3" r="3"></circle>	
	);
};

let styles = {
	available: "#9A1818",
	busy: "#A74D58",
	gray: "#9B9B9B"
};

export default Radium(UserIndicatorCircle);