export const ADD_STUDENT = 'ADD_STUDENT';

export const addStudent = student => dispatch => {
	dispatch({type: ADD_STUDENT, payload: student})
}
