import React from 'react';
import PropTypes from 'prop-types';
import UserBackground from './Background';
import UserIndicator from './Indicator';
import Radium from 'radium';

const User = (props) =>
  <div style={styles.base}>
    <h4 style={styles.name}>{props.name} </h4>
    <img src={props.src} alt="" style={styles.img} />
    <div style={styles.showInfo}> 
      <h2 style={{marginBottom: '0', marginTop: '20%', lineHeight: 1}}>{props.status === "away" ? " ? " : props.timeLeft} </h2>
      {props.status === "away" ? '' : <h4 style={{lineHeight: 1, color: "white"}}> minutes </h4>}
    </div>
    <UserBackground status={props.status} color={styles.color}/>
    <UserIndicator status={props.status} color={styles.color} 
    illuminated={props.status === "available"? Math.ceil(props.timeLeft): Math.ceil(props.timeLeft/5)} />
  </div>;

User.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  status: PropTypes.string,
}

let styles = {
  name: {
    marginBottom: "5px",
    marginTop: "25px"
  },
  base: {
    '@media (maxWidth: 800px)':{
      marginLeft: "2%",
      marginRight: "2%"
    },
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "15px",
    marginRight: "15px"
  },

  img: {
    position: "absolute",
    left: "12%",
    bottom: "12%",
    width: "75%"
  },

  color: {
    busyBackground: "#A74D58",
    busyPrimary: "#9A1919",
    availableBackground: "#B8E986",
    availablePrimary: "#417505",
    disabled: "#9B9B9B"
  },

  showInfo: {
    opacity: 0,
    position: "absolute",
    bottom: "12%",

    textAlign: "center",
    color: "white",

    height: "100px",
    width: "100px",

    ':hover': {
      opacity: 0.95,
      borderRadius: "80%",
      background: 'rgba(0,0,0,.75)'
    }
  }
};

export default Radium(User);