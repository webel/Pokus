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
				{props.rest &&
					<LightLayout
						rest={props.rest}
						numLights={props.numLights}
						interval={parseFloat(props.interval)}
						on={props.focus || props.rest}
					/>
				}
				{props.focus &&
					<LightLayout
						rest={props.rest}
						numLights={props.numLights}
						interval={parseFloat(props.interval)}
						on={props.focus}
					/>
				}
			</div>
				<div style={styles.shadow}> </div>     
		</div>
		{props.rest ?
		<CountdownTimer 
			handleChange={(event) => props.handleChange(event.target.value)} 
			initialTimeRemaining={props.interval/5}
			completeCallback={() => props.onBreakComplete()}
			focus={props.focus}
			rest={props.rest}
		/> :
		<CountdownTimer 
			handleChange={(event) => props.handleChange(event.target.value)} 
			initialTimeRemaining={props.interval}
			completeCallback={() => props.onBreakTime()}
			focus={props.focus}
			rest={props.rest}
		/> 
		}
	</div> 
	);
};


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
};

Focus.propTypes = {
	onButtonClick: PropTypes.func,
	handleChange: PropTypes.func,
	onBreakTime: PropTypes.func,
	onBreakComplete: PropTypes.func,
	numLights: PropTypes.number,
	interval: PropTypes.number,
	rest: PropTypes.bool,
	focus: PropTypes.bool,
	isMobile: PropTypes.bool,
};

export default Radium(Focus);