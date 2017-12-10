import {TOGGLE_TIMER, CURRENT_LED, UPDATE_TIMER, BREAK_TIME, BREAK_TIME_OVER} from '../actions/focusTimer';
import objectAssign from 'object-assign';

const initialState = {
//  numLights: "6",
  interval: 5,
  focus: false,
  breaky: false,
  currentLED: 0,
  numLights: 8,
  lightDelay: 5*60/8
};


function focus(state = initialState, action){
	switch (action.type) {
    case UPDATE_TIMER:
      return objectAssign({}, state, {interval: action.partial});
		case TOGGLE_TIMER:
      return objectAssign({}, state, {focus: !state.focus, currentLED: 0, breaky: false});
    case CURRENT_LED:
      if(state.currentLED === state.numLights){
        return objectAssign({}, state, {breaky: !state.breaky, currentLED: 0});
      }
      return objectAssign({}, state, {currentLED: state.currentLED++});
    case BREAK_TIME:
      return objectAssign({}, state, {breaky: !state.breaky, currentLED: 0});
    case BREAK_TIME_OVER:
      return objectAssign({}, state, {breaky: false, currentLED: 0});

    default:
			return state;
	}
}

export default focus;

//    case CURRENT_LED:
//      if(state.currentLED < state.numLights){
//        return objectAssign({}, state, {currenLED: state.currentLED++});
//      }else{
//        return objectAssign({}, state, {currenLED: 0});
//      }
//    case UPDATE_TIMER:
//      if(state.interval !== action.interval){
//        return objectAssign({}, state, {interval: action.interval});
//      }
//      break;