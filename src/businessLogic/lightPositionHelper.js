export default class LightPositionHelper {

	// Calculates the position for the lights, where the position is calculated for CSS animation class and therefor isn't
	// in a format of x,y, but rather which point on a circle with a rad of 88 (called translation)
	static calculatePos(nr, index) {
		const TOP = 270;
		const degreeCircle = 360; 
		const translation = 88;

		return (degreeCircle/nr*index+TOP)%degreeCircle;
	}
}
