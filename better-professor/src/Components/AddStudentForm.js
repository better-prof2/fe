import React from 'react';

const AddStudentForm = props => {

	return (
		<div>
			<h2>Add New Student</h2>
			<form className='form'>
				<div>
					<label className='form-label' htmlFor='inputFirstName'>First Name: </label>
					<input
						type='text'
						name='firstName'
						id='inputFirstName'
						placeholder='ex. John'
						autoFocus='true'
						width={30}
						required
					/>
					<label className='form-label' htmlFor='inputInitial'>Middle Initial: </label>
					<input
						type='text'
						name='middleInitial'
						id='inputInitial'
						placeholder='ex. A'
						width={2}
					/>
					<label className='form-label' htmlFor='inputLastName'>Last Name: </label>
					<input
						type='text'
						name='lastName'
						id='inputLastName'
						placeholder='ex. Smith'
						width={30}
						required
					/>
				</div><br />

				<div>
					<label className='form-label' htmlFor='inputStudentNumber'>Student Number: </label>
					<input
						type='number'
						name='studentNumber'
						id='inputStudentNumber'
						placeholder='ex. 11183021'
						maxLength='8'
						width={30}
						required
					/>
				</div><br />

				<div>
					<h4>Class Year</h4>
					<input type='radio' id='radioFreshman' name='year' value='Freshman' />
					<label htmlFor='radioFreshman'> Freshman</label>
					<input type='radio' id='radioSophmore' name='year' value='Sophmore' />
					<label htmlFor='radioSophmore'> Sophmore</label>
					<input type='radio' id='radioJunior' name='year' value='Junior' />
					<label htmlFor='radioJunior'> Junior</label>
					<input type='radio' id='radioSenior' name='year' value='Senior' />
					<label htmlFor='radioSenior'> Senior</label>
				</div><br />

				<div>
					<label className='form-label' htmlFor='inputEmail'>Student Email: </label>
					<input
						type='email'
						name='email'
						id='inputEmail'
						placeholder='myemail@school.edu'
						width={30}
						required
					/>
				</div><br />

				<div>
					<button type='submit'>Submit</button>
					<button>Clear</button>
				</div>
			</form>
		</div>
	)
};

export default AddStudentForm;