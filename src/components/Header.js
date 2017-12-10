import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

let styles = {
	basebox: {
		width: "100%",
		height: "5%",
		marginBottom: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	base: {
		alignSelf: "left",
		marginLeft: "10px",
		transition: "all 1.5s 0.2s"
	},
	appHeader: {
		fontFamily: "Dancing Script",
		fontSize: "3rem",
		paddingTop: "20px"
	},
	containerHeader: {
		fontFamily: "Roboto",
		flex: 3
	},
	options: {
		display: "inline",
		marginLeft: "auto",
		color: "maroon",
		flex: 1,

		height: "40px",
		width: "40px",

		':hover': {
			opacity: 0.6,
			cursor: "pointer"
		}
	}
};

const Header = ({title, options}) => 
		<div style={styles.basebox}>
		{title==="Pokus" ? 
			<h1 style={[styles.base, styles.appHeader]}> {title}  </h1> :
			<h3 style={[styles.base, styles.containerHeader]}> {title} </h3>}
		{!(title==="Pokus") &&	
			options.map((option,i) =>
				<img key={i} style={styles.options} alt={""} src={option} />
			)
		}
		</div>;


Header.propTypes = {
	snap: PropTypes.bool,
	title: PropTypes.string
};

export default Radium(Header);

// 				<h4 key={i} style={styles.options}> {option} </h4>
