import React from 'react';
import { connect } from 'react-redux';

const AddMessageForm = props => {
	return (
		<div>
			<h2>Create Message</h2>
			<form className='form'>
				<div>
					<label htmlFor='selectStudent'> </label>
					<select id='selectStudent' name='recepient'>
						<option value=''>--Please choose a recepient--</option>
						{props.students.map(student => (
							<option value={student}>{student.firstName} {student.middleName} {student.lastName}</option>
						))}
					</select>
				</div> <br />

				<div>
					<label className='form-label' htmlFor='inputTitle'>Message Title: </label>
					<input
						type='text'
						name='messageTitle'
						id='inputTitle'
						placeholder='ex. New Project Created'
						width={30}
						required
					/>
				</div><br />

				<div>
					<label htmlFor='textMessage'> </label>
					<textarea id='textMessage' name='message' placeholder='Input message here...' rows='4' cols='50' required>
					</textarea>
				</div><br />

				<div>
					<button type='submit'>Submit</button>
					<button>Clear</button>
				</div>
			</form>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		students: state,
	}
}

export default connect(mapStateToProps, {})(AddMessageForm);