import React from 'react';
import PropTypes from 'prop-types';
import LightLayout from './LightLayout';
import Button from './Button';
import Radium from 'radium';
import CountdownTimer from './CountDown';

const Focus = (props) => {
	return (
	<div style={styles.container}>
		<div style={styles.encapsulator} >
			<div style={styles.lens}>
				<Button onClick={() => props.onButtonClick()} />
				<LightLayout 
					breaky={props.focus.breaky}
					currentLED={props.focus.currentLED} 
				numLights={props.focus.numLights} 
					interval={props.focus.interval} 
					on={props.focus.focus}
				/> 
			</div>
				<div style={styles.shadow}> </div>     
		</div>
		{props.focus.breaky ?
		<CountdownTimer 
			handleChange={(event) => props.handleChange(event.target.value)} 
			initialTimeRemaining={props.focus.interval/5}
			intervalCallback={props.focus.lightDelay}
			completeCallback={() => props.onButtonClick()}
			focus={props.focus.focus}
			breaky={props.focus.breaky}
		/> :
		<CountdownTimer 
			handleChange={(event) => props.handleChange(event.target.value)} 
			initialTimeRemaining={props.focus.interval}
			completeCallback={() => props.onBreakTime()}
			intervalCallback={props.focus.lightDelay}
			focus={props.focus.focus}
			restart={() => props.onButtonClick()}
			breaky={props.focus.breaky}

		/> 
		}
	</div> 
	);
};

let bounce = Radium.keyframes({
	'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) rotate(135deg)'},
	'40%': { transform: 'translateY(-20px) rotate(135deg)'},
	'60%': { transform: 'translateY(-12px) rotate(135deg)'}
});

let fade = Radium.keyframes({
	'0%': {
		opacity: '0'
	},
	'100%': {
		opacity: '.9'
	}
});


const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: "80%"
	},

	encapsulator: {
		position: 'relative'
	},

	shadow: {
		width: '230px',
		margin: '30px 0 0 0px',
		height: '20px',
	//Instead of the line below you could use @include border-radius($radius, $vertical-radius)
		borderRadius: '50%',
		backgroundColor: 'rgba(0, 0, 0, .3)',
		animation: 'x 9s 3s both',
		animationName: fade        
	},

	lens: {
		borderRadius: '50%', 

		width: '224px',
		height: '224px',

		marginTop: '15px',
		animation: 'x ease-in 5s both',
		animationName: fade,
		animationDelay: '0s',
		opacity: '0',
		background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAS0lEQVQYV42PMQ4AIAgDyy7/fyjuGogYFExkgnKBlrjxQCjpAm4cJespgg5V8Abv5T0b+HoXdQIwKk9u0uHDY0qwBIW/wJT6dVH1CZzOJAuMdT5xAAAAAElFTkSuQmCC) repeat',
		boxShadow: '0 3px 0 rgba(0, 0, 0, .4)'
	},

	arrow: {
		width: '25px',
		height: '25px',
		position: 'absolute',
		bottom: '-32%',
		left: '45%',
		borderTop: '5px solid black',
		borderRight: '5px solid black',
		':hover': {
			cursor: 'pointer'
		},
		animation: 'x infinite 3s',
		animationName: bounce
	}


};

Focus.propTypes = {
	onButtonClick: PropTypes.func,
	onLEDIlluminate: PropTypes.func,
	focus: PropTypes.object,
	isMobile: PropTypes.bool,
	'focus.numLights': PropTypes.number,
	'focus.interval': PropTypes.number

};

export default Radium(Focus);