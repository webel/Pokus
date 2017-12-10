import { connect } from 'react-redux';
import { toggleTimer, onUpdate, onBreak, onBreakComplete } from '../actions/focusTimer';
import Focus from '../components/Focus';

const mapStateToProps = (state) => {
  return {
    numLights: state.focus.numLights,
    interval: state.focus.interval,
    focus: state.focus.focus,
    rest: state.focus.rest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(toggleTimer());
    },
    handleChange: (partial) => {
      dispatch(onUpdate(partial));
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
