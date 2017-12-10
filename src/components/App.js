import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FokusTimer from '../containers/FokusTimer';
import Header from '../components/Header';
import UserPanel from '../components/UserPanel';
import Styles from '../components/Styles';
import Radium from 'radium';


let backgroundChange = Radium.keyframes({
	'0%': { background: 'rgba(79, 184, 252, 0.7)'},
	'10%': {background: 'rgba(79, 252, 230, 0.7)'},
	'20%': {background: 'rgba(76, 227, 118, 0.7)'},
	'30%': {background: 'rgba(247, 229, 84, 0.7)'},
	'40%': {background: 'rgba(252, 185, 79, 0.7)'},
	'50%': {background: 'rgba(252, 185, 79, 0.7)'},
	'60%': {background: 'rgba(252, 79, 79, 0.7)'},
	'70%': {background: 'rgba(252, 79, 173, 0.7)'},
	'80%': {background: 'rgba(180, 79, 252, 0.7)'},
	'90%': {background: 'rgba(79, 111, 252, 0.7)'},
	'100%': {background: 'rgba(79, 184, 252, 0.7)'}

});

let bounce = Radium.keyframes({
	'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0) rotate(135deg)'},
	'40%': { transform: 'translateY(-20px) rotate(135deg)'},
	'60%': { transform: 'translateY(-12px) rotate(135deg)'}
});

let fadeIn = Radium.keyframes ({
	'0%': {
        opacity: '0'
    },
    '100%': {
        opacity: '1'
    }
});

let styles = {
	// defines colours and styles that might be useful across the three panels
	accent : {
		color: '#E9C46A'
	},

	// Specifies specific styles for the right panel,
	// in it's current state just the background transition 
	// animation
	right: {
		animation: 'x 120s infinite linear',
		animationName: backgroundChange
	},
	align: {
		alignSelf: 'baseline'
	},
	// This is the base style for the two panels
	panel: {
		width: '50%',
		'@media (max-width: 630px)': {
			width: '100%'
		},

		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'scroll',

		animation: 'x 5s',
		animationName: fadeIn,

		background: 'linear-gradient(-180deg, #FFF 0, ivory 100%)'
	},
	half: {
		width: '50%',
		transition: 'width 0.5s ease-in'
	},
	full: {
		width: '100%',
		transition: 'width 0.5s ease-in'
	},
	content: {
		maxWidth: '500px',
		alignSelf: 'center'
	},
	contentOuter: {
		maxWidth: '650px',
		alignSelf: 'center'
	},
	arrow: {
		width: '25px',
		height: '25px',

		position: 'absolute',
		bottom: '5%',
		left: '47%',

		borderTop: '5px solid black',
		borderRight: '5px solid black',

		':hover': {
			cursor: 'pointer'
		},

		animation: 'x infinite 3s',
		animationName: bounce
	}
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: true,
			isMobile: false
		};
		this.expand = this.expand.bind(this);
		this.checkViewport = this.checkViewport.bind(this);
	}

	componentDidMount() {
		this.checkViewport();
		let timeout = false;
		window.addEventListener('resize', () => {
			clearTimeout(timeout);
			timeout = setTimeout(this.checkViewport, 250);
		});
	}

	checkViewport(){
		if(window.innerWidth > 630){
			this.setState({isMobile: false});
		}else{
			this.setState({isMobile: true});
		}
	}

	expand(){
		this.setState({expand: !this.state.expand});
	}

	render() {
		return(
			<div className="container" >
				<Styles />
				<div style={[styles.panel, styles.right, this.state.expand ? styles.full : styles.half]} onDoubleClick={() => this.expand()}>
					<Header title={"Pokus"} />
					<FokusTimer isMobile={this.state.isMobile} />
				</div>
				<div style={styles.panel}>
					<UserPanel />
				</div>
			</div>
		);
	}
}

App.propTypes = {
	toTop: PropTypes.bool
};

export default Radium(App);