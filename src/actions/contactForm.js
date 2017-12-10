export const SUBMIT = 'SUBMIT';
export const UPDATE = 'UPDATE';

export const onUpdate = (field, partial) => {
	return {
		type: 'UPDATE',
		field,
		partial
	};
};

export const onSubmit = () => {
	return {
		type: 'SUBMIT'
	};
};