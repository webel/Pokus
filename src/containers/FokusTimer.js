import { connect } from 'react-redux';
import { toggleTimer, updateCurrentLED, onUpdate, onFocusing, onBreak, onBreakComplete } from '../actions/focusTimer';
import Focus from '../components/Focus';

const mapStateToProps = (state) => {
  return {
    numLights: state.numLights,
    interval: state.interval,
    focus: state.focus,
    breaky: state.breaky,
    currentLED: state.currentLED
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(toggleTimer());
    },
    onLEDIlluminate: () => {
      dispatch(updateCurrentLED());
    },
    handleChange: (partial) => {
      dispatch(onUpdate(partial));
    },
    updateFocusingState: () => {
      dispatch(onFocusing());
    },
    onBreakTime: () => {
      dispatch(onBreak());
    },
    onBreakComplete: () => {
      dispatch(onBreakComplete());
    }
  };
};

const FokusTimer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Focus);

export default FokusTimer;
