import React from 'react';

import { connect } from 'react-redux';

import Student from './StudentCard';
import {Link} from "react-router-dom";

const Dashboard = props => {

	return (
        <div>
			  <h2>Professor's Dashboard</h2>
			  <Link to='/add-student'>
				  <button>Add Student</button>
			  </Link>
			  <div className='dashboard-container'>
				  {props.students.map(student => {
                    return (
                        <Student key={student.id} student={student} projects={student.projects} />
                    )
                })}
            </div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		students: state.students
	}
}

export default connect(mapStateToProps, {})(Dashboard);