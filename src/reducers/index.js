import { combineReducers } from 'redux';
import focus from './focusTimer';

const focusApp = combineReducers({
  focus,
});

export default focusApp;
