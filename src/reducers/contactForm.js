import { SUBMIT, UPDATE } from '../actions/contactForm';
import objectAssign from 'object-assign';

const initialState = {
  name: '',
  email: '',
  message: '',
  sent: false
};

function contact(state = initialState, action){
	switch (action.type) {
		case UPDATE:
			return objectAssign({}, state, {[action.field]: action.partial});
        case SUBMIT:
			return objectAssign({}, initialState, {sent: true});
    default:
		return state;
	}
}

export default contact;