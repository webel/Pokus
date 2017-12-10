import React from 'react';
import Radium, { StyleRoot } from 'radium';
import App from './App';
 
const AppWrapper = (props) => {
	return(
		<StyleRoot>
			<App />
		</StyleRoot>
	);
};

export default Radium(AppWrapper);