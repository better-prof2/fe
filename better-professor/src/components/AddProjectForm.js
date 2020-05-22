import React from 'react';

const AddProjectForm = () => {
	return (
		<div>
			<h2>Add New Project</h2>
			<form className='form'>
				<div>
					<label className='form-label' htmlFor='inputProjectName'>Project Name: </label>
					<input
						type='text'
						name='projectName'
						id='inputProjectName'
						placeholder='ex. Create Personal Website'
						autoFocus='true'
						width={50}
						required
					/>
				</div><br />

				<div>
					<label className='form-label' htmlFor='inputDueDate'>Due Date: </label>
					<input
						type='date'
						name='dueDate'
						id='inputDueDate'
						placeholder='ex. 09/09/2021'
						width={15}
						required
					/>
				</div><br />

				<div>
					<label htmlFor='textDescription'> </label>
					<textarea id='textDescription' name='description' placeholder='Project Description...' rows='4' cols='50'>
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

export default AddProjectForm;