import { combineReducers } from 'redux';
import focus from './focusTimer';
import contact from './contactForm';

const focusApp = combineReducers({
  focus,
  contact
});

export default focusApp;
