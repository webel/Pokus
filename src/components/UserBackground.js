import React from 'react';
import Radium from 'radium';

const UserBackground = ({status}) => {
	return(
	<div>
		<svg width="100px" height="100px" viewBox="-1 -1 76 76" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M37,74 C57.4345357,74 74,60.3785986 74,38.8965998 C74,17.4146009 57.4345357,0 37,0 C16.5654643,0 -5.68434189e-14,17.4146009 -5.68434189e-14,38.8965998 C-5.68434189e-14,60.3785986 16.5654643,74 37,74 Z" 
			id="Background" stroke="#9B9B9B" strokeWidth="1" fill={styles[status]} fillRule="evenodd"></path>
		</svg>
	</div>
	);
};

let styles = {
	available: "#B8E986",
	busy: "#A74D58",
	away: "#9B9B9B"
};

export default Radium(UserBackground);