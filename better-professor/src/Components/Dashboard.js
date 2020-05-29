import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import StudentCard from "./Students/StudentCard";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const [students, setStudents] = useState([]);
  const getUser = async () => {
    const fetchUser = await fetch("https://randomuser.me/api/?results=8");
    const userData = await fetchUser.json();
    setStudents(userData.results);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2>Professor's Dashboard</h2>
      <Link to="/add-student">
        <button>Add Student</button>
      </Link>
      <div className="container student-container">
        {students.map((student, i) => {
          return <StudentCard key={i} student={student} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    students: state.students,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
