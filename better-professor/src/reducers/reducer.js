import studentData from '../dummyData/studentData';

const initialState = studentData;

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}