/*
* Action types
*/

export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const CURRENT_FOCUSING = 'CURRENT_FOCUSING';
export const CURRENT_LED = 'CURRENT_LED';
export const LIGHT_PLACEMENT = 'LIGHT_PLACEMENT';
export const UPDATE_TIMER = 'UPDATE_TIMER';
export const BREAK_TIME = 'BREAK_TIME';
export const BREAK_TIME_OVER = 'BREAK_TIME_OVER';


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

export const updateCurrentLED = () => {
	return {
		type: 'CURRENT_LED'
	};
};

export const onFocusing = () => {
	return {
		type: 'CURRENT_FOCUSING'
	};
};

export const onBreak = () => {
	return {
		type: 'BREAK_TIME'
	};
};

export const onBreakComplete = () => {
	return {
		type: 'BREAK_TIME_OVER'
	};
};

//export const calculateLightPlacement = (numLights) => {
//	return {
//		type: 'LIGHT_PLACEMENT', 
//		numLights
//	};
//};//

//export const updateTimerInterval = (interval) => {
//	return {
//		type: 'UPDATE_TIMER',
//		interval
//	};