import React from 'react';
import Radium from 'radium';

const Button = ({onClick}) => (
       <div style={styles} onClick={onClick} />
);

const styles = {
	position: 'relative',
    left: '30%',
    top: '30%',

    width: '90px',
    height: '90px',
    borderRadius: '50%',
    background: '#333',
    ':hover' : {
        background: '#444'
    }
};

export default Radium(Button);