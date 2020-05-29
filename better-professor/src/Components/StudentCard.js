import React from 'react';

const StudentCard = props => {

	return (
		<div className='student' key={props.key} style={{ border: '2px dashed black' }}>
			<h3>{props.student.firstName} {props.student.middleName} {props.student.lastName}</h3>
			<p>ID#: <strong>{props.student.studentNumber}</strong></p>
			<p>Class Year: <strong>{props.student.classYear}</strong></p>
			<p>Email: <strong>{props.student.studentEmail}</strong></p>
			<div style={{ border: '2px solid navy',  width: '80%', margin: '15px 10%' }}>
				<h4>Student's Projects</h4>
				{props.projects.map(project => (
					<div key={project.id} style={{ border: '2px dashed black', width: '70%', padding: '5px', margin: '15px 15%' }}>
						<h5>{project.name}</h5>
						<p>Due Date: <strong>{project.dueDate}</strong></p>
						<p>Description: <strong>{project.description}</strong></p>
					</div>
				))}
			</div>
		</div>
	)
};

export default StudentCard;