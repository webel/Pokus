import React from 'react';
import Radium, { Style } from 'radium';


const colors = {
	base: 'rgba(62,78,80,1)',
	lighter: 'rgba(62,78,80,0.8)'
};

const Styles = () => {
	return (
		<Style 
		rules={{
			'.container': {
				margin: 0,
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				alignItems: 'center',
				fontFamily: 'Roboto, avenir next, Arial, sans-serif'
			},
			body: {
				margin: 0,
				overflow: "hidden"
			},
			html: {
				fontSize: '100%'
			},
			'h1, h2, h3, h4': {
				maxWidth: '30em',
				lineHeight: 1.3,
				fontWeight: 500
			},
			h1: {
				fontSize: '3rem'
			},
			h2: {
				fontSize: '2.25rem'
			},
			h3: {
				fontSize: '1.5rem',
				color: colors.base

			},
			h4: {
				fontSize: '1.25rem',
				color: colors.lighter,
				marginTop: 0
			},
			h5: {
				color: colors.lighter,
				fontSize: '1rem',
				fontWeight: 300,
				lineHeight: 1.6,
				marginTop: 0,
				maxWidth: '24em'
			},
			p: {
				fontSize: '.875rem',
				maxWidth: '20em',
				lineHeight: 1.6
			},
			mediaQueries: {
				'(max-width: 630px)': {
					body: {
						overflow: 'scroll'
					},
					p: {
						fontSize: '1.1rem'
					}
				}
			}

		}}
	/>
	);
};

export default Radium(Styles);

