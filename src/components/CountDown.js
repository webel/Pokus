import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

// Generic Countdown Timer UI component 
// https://github.com/uken/react-countdown-timer
//
// Refactored to React > 15.5 by yours truely.
// TODO: refactor properly to get rid of "mounted" checks which are an anti-pattern

// props:
//   - initialTimeRemaining: Number
//       The time remaining for the countdown (in ms).
//
//   - interval: Number (optional -- default: 1000ms)
//       The time between timer ticks (in ms).
//
//   - formatFunc(timeRemaining): Function (optional)
//       A function that formats the timeRemaining.
//
//   - tickCallback(timeRemaining): Function (optional)
//       A function to call each tick.
//
//   - completeCallback(): Function (optional)
//       A function to call when the countdown completes.
//
class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.props.initialTimeRemaining * 60 * 1000,
      timeoutId: false,
      prevTime: false,
    }
    this.tick = this.tick.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
    // this._mounted = this._mounted.bind(this);
  }


  static propTypes = {
    focus: PropTypes.bool,
    rest: PropTypes.bool,
    initialTimeRemaining: PropTypes.number.isRequired,
    interval: PropTypes.number,
    formatFunc: PropTypes.func,
    tickCallback: PropTypes.func,
    intervalCallback: PropTypes.number,
    completeCallback: PropTypes.func
  }

  static defaultProps = {
    interval: 1000,
    formatFunc: null,
    tickCallback: null,
    completeCallback: null
  }

  componentDidMount() {
    this._mounted = true;
    this.tick();
  }

  componentWillReceiveProps(newProps) {
    if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
    this.setState({
      prevTime: null, 
      timeRemaining: newProps.initialTimeRemaining*60*1000
    });
  }

  componentDidUpdate() {
    if ((!this.state.prevTime) && this.state.timeRemaining > 0 && this._mounted) {
      this.tick();
    }
  }

  componentWillUnmount() {
    this._mounted = false;
    clearTimeout(this.state.timeoutId);
  }

  tick() {
    if (!this.props.focus & !this.props.rest) {
      return;
    }
    let currentTime = Date.now();
    let dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
    let interval = this.props.interval;

    // correct for small variations in actual timeout time
    let timeRemainingInInterval = (interval - (dt % interval));
    let timeout = timeRemainingInInterval;

    if (timeRemainingInInterval < (interval / 2.0)) {
      timeout += interval;
    }

    let timeRemaining = Math.max(this.state.timeRemaining - dt, 0);
    let countdownComplete = (this.state.prevTime && timeRemaining <= 0);

    if (this._mounted) {
      if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
      this.setState({
        timeoutId: countdownComplete ? null : setTimeout(this.tick, timeout),
        prevTime: currentTime,
        timeRemaining: timeRemaining
      });
    }

    if (countdownComplete) {
      if (this.props.completeCallback) { this.props.completeCallback(); }
      return;
    }

    if (this.props.tickCallback) {
      this.props.tickCallback(timeRemaining);
    }
  }

  getFormattedTime(milliseconds) {
    if (this.props.formatFunc) {
      return this.props.formatFunc(milliseconds);
    }

    let totalSeconds = Math.round(milliseconds / 1000);

    let seconds = parseInt(totalSeconds % 60, 10);
    let minutes = parseInt(totalSeconds / 60, 10) % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return minutes + ':' + seconds;
  }

  render() {
    let timeRemaining = this.getFormattedTime(this.state.timeRemaining);

    return (
      <div style={{textAlign: 'center'}}>
          <input 
            style={[styles.input, (this.props.focus || this.props.rest)? styles.showTime : styles.enterInput]} type="text"
            value={(this.props.focus || this.props.rest) ? timeRemaining : this.props.initialTimeRemaining}
            onChange={this.props.handleChange}
            disabled={this.props.focus ^ this.props.rest}
          />
        {(this.props.focus ^ this.props.rest) ? '' : <h4 style={{display: "inline"}}> minute(s) 
          {this.props.rest ?  ' rest time' :  ' focusing time'} </h4>}
        {(this.state.timeRemaining < 5 && this.props.focus)? <h4> Take a rest! </h4> : ''}
      </div>
    );
  }
};


let styles = {
  input: {
    apperance: "none",
    WebkitAppearance: "none",
    background: "none",
    border: "none",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: "2.5rem",
    ':focus': {
      outline: "none"
    }
  },
  enterInput: {
    width: '10%'
  },
  showTime: {
    width: '100px'
  }
};

export default Radium(CountdownTimer);