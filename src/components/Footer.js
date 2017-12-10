import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Radium from 'radium';


const Footer = (props) => {
	return(
		<div style={styles.footer}>
			<Link activeStyle={styles.active} style={styles.link} to="/" onClick={props.routeChange} >About</Link> 
		</div>
	);
};

let styles = {
	footer: {	
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		
		height: '150px',
		width: '50%',
		bottom: "0px",
		padding: 15,
		
		'@media (max-width: 850px)': {
			width: '90%',
			fontSize: '110%',
			fontWeight: 500
		}

	},

	link: {
		'textDecoration': 'none',
		color: 'rgba(138, 147, 165, 0.6)',
		':hover': {
			color: 'rgba(138, 147, 165, 0.8)'
		}
	},

	active: {
		color: 'rgba(138, 147, 165, 1)'
	}
};

export default Radium(Footer);