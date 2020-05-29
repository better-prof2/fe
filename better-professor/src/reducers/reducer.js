import { ADD_STUDENT } from '../actions/actions';

import studentData from '../dummyData/studentData';

const initialState = studentData;


export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STUDENT:
			return {
				...state,
				students: state.students.concat(action.payload)
			};
		default:
			return state;
	}
}