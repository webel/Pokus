import React from 'react';
import Radium from 'radium';
import Timer from '../containers/CountDownWrapper';
import Pokus from '../containers/PokusWrapper';

const FocusPanel = () => {
	return (
		<div style={styles.container}>
			<Pokus />
			<Timer />
		</div>
	);
};


const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: "80%"
	},
};

export default Radium(FocusPanel);