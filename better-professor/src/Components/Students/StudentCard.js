import React, { useState, useEffect } from "react";

const StudentCard = (props) => {
  console.log(props);
  const { email, picture, name } = props.student;
  return (
    <div>
      <div className="card">
        <img className="avatarImg" src={picture.medium} alt="" />
        <div className="student-info">
          <h3>
            {name.first}
            <span> {name.last}</span>
          </h3>
          <div className="student-btn-wrapper">
            <button className="student-btn student-btn-view">
              View Projects
            </button>
            <button className="student-btn student-btn-delete">
              Delete Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
