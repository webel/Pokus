import React, { Component } from 'react';
import FocusPanel from 'components/Panels/FocusPanel';
import UserPanel from 'components/Panels/UserPanel';
import Header from 'components/Header';
import Styles from 'components/Styles';
import Radium from 'radium';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: true,
		};
		this.expand = this.expand.bind(this);
	}

	expand() {
		this.setState({ expand: !this.state.expand });
	}

	render() {
		return (
			<div className="container" >
				<Styles />
				<div
					style={[styles.panel, 
							 styles.right, 
							 this.state.expand ? styles.full : styles.half]} 
					onDoubleClick={() => this.expand()}
				>
					<Header title={"Pokus"} />
					<FocusPanel />
				</div>
				<div style={styles.panel}>
					<UserPanel />
				</div>
			</div>
		);
	}
}


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

let fadeIn = Radium.keyframes ({
	'0%': {
        opacity: '0'
    },
    '100%': {
        opacity: '1'
    }
});

let styles = {
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
};

export default Radium(App);