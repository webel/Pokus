import { connect } from 'react-redux';
import { 
  onUpdate, 
  onTimeout
} from 'actions/focusTimer';
import CountdownTimer from 'components/CountDown';

const mapStateToProps = (state) => {
  let interval = null
  if(state.focus.rest) {
    // Divided by 5 to conform with Pomodoro, 
    // TODO: extract into options file
    interval = state.focus.interval / 5
  }
  return {
    initialTimeRemaining: interval || state.focus.interval,
    focus: state.focus.focus,
    rest: state.focus.rest,
    focusing: state.focus.focus || state.focus.rest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      dispatch(onUpdate(event.target.value));
    },
    completeCallback: () => {
      dispatch(onTimeout());
    },
  };
};

const Timer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownTimer);

export default Timer;
