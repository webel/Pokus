import React from 'react';
import Radium from 'radium';

const UserIndicator = ({status, illuminated, color}) => {
	let styles = {
		available: color.availablePrimary,
		busy: color.busyPrimary,
		gray: color.disabled
	};

	return(
	<div>
		<svg width="57px" height="8px" viewBox="9 81 57 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g id="Availability" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(10.000000, 82.000000)">
				{[...Array(illuminated)].map((x,i) =>
					<circle key={i} stroke={styles[status]} fill={styles[status]} cx={12*i+3} cy="3" r="3"></circle>
				)}
				{[...Array(5-illuminated)].map((x,i) =>
					<circle key={i} stroke={styles.gray} fill={styles.gray} cx={57-(12*i+6)} cy="3" r="3"></circle>
				)}
						
			</g>
		</svg>
	</div>
	);
};


export default Radium(UserIndicator);