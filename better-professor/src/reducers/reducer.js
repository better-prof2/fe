import studentData from '../dummy-data/studentData';

const initialState = studentData;

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}