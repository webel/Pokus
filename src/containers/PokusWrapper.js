import { connect } from 'react-redux';
import { toggleTimer } from '../actions/focusTimer';
import PokusComp from '../components/Pokus';

const mapStateToProps = (state) => {
  return {
    numLights: state.focus.numLights,
    interval: state.focus.interval,
    focus: state.focus.focus,
    rest: state.focus.rest,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: () => {
    dispatch(toggleTimer());
  }
});

const Pokus = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokusComp);

export default Pokus;
