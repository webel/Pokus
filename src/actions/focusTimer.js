/*
* Action types
*/

export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const UPDATE_TIMER = 'UPDATE_TIMER';
export const SWITCH = 'SWITCH';

/*
* Action creators
*/
export const toggleTimer = (focus) => {
	return { 
		type: 'TOGGLE_TIMER',
		focus
	};
};

export const onUpdate = (partial) => {
	return {
		type: 'UPDATE_TIMER',
		partial
	};
};

export const onTimeout = () => {
	return {
		type: 'SWITCH',
	};
};