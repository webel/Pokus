import {TOGGLE_TIMER, UPDATE_TIMER, SWITCH} from 'actions/focusTimer';

const initialState = {
  interval: 5,
  focus: false,
  rest: false,
  numLights: 8,
  lightDelay: 5*60/8
};


function focus(state = initialState, action){
	switch (action.type) {
    case UPDATE_TIMER:
      return { ...state, 
        interval: action.partial
      }
    case TOGGLE_TIMER:
      return { ...state,
        focus: !state.focus,
        rest: false,
        interval: parseFloat(state.interval)
      }
    case SWITCH:
      return { ...state,
        focus: !state.focus,
        rest: !state.rest,
      }
    default:
			return state;
	}
}

export default focus;