import React, { useState } from "react";
import { connect } from "react-redux";
import { addStudent } from "../actions/actions";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Theme from "./ui/Theme";
import { FormLabel } from "@material-ui/core";

const initialStudent = {
  firstName: "",
  middleName: "",
  lastName: "",
  studentNumber: "",
  classYear: "",
  studentEmail: "",
  projects: [],
};

/////////material-ui variables////////
// const classes = useStyles();
const theme = useTheme();

const AddStudentForm = (props) => {
  const [newStudent, setNewStudent] = useState(initialStudent);

  const handleChange = (e) => {
    e.preventDefault();
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addStudent(newStudent);
    props.history.push("/dashboard");
  };

  // console.log(props.students);
  return (
    <Grid container direction="column ">
      <Grid item>
        <Grid item>
          <Typography
            variant="h5"
            style={{ color: Theme.palette.primary.amin }}
          >
            Add New Student
          </Typography>
        </Grid>
        <Grid item container style={{ marginTop: "2em" }}>
          <form className="form" onSubmit={handleSubmit}>

            <Grid item>
              <TextField
                variant="outlined"
                label="First Name"
                type="text"
                name="firstName"
                id="inputFirstName"
                placeholder="ex. Neil"
                autoFocus="true"
                width={30}
                value={newStudent.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <TextField variant='outlined' label='Middle Name' 
               type="text"
               name="middleName"
               id="inputMiddle"
               placeholder="ex. Alden"
               width={30}
               value={newStudent.middleName}
               onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <TextField 
              variant='outlined' label='Last Name' 
              type="text"
              name="lastName"
              id="inputLastName"
              placeholder="ex. Armstrong"
              width={30}
              value={newStudent.lastName}
              onChange={handleChange}
              required
              />
            </Grid>


            <Grid container>
            <Grid item style={{ marginTop: "1em" }}>
              <TextField 
              variant='outlined'
              label='Student Number'
                 type="number"
                 name="studentNumber"
                 id="inputStudentNumber"
                 placeholder="ex. 11183021"
                 maxLength={8}
                 width={30}
                 value={newStudent.studentNumber}
                 onChange={handleChange}
                 required
              />
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <FormControl>
                <FormLabel>Class Year</FormLabel>
                <RadioGroup>
                  <FormControlLabel />
                  <FormControlLabel />
                  <FormControlLabel />
                  <FormControlLabel />
                </RadioGroup>
              </FormControl>
              
              />
            </Grid>
            </Grid>
            
          </form>
        </Grid>
      </Grid>
    </Grid>
        

        {/* <h2>Add New Student</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="inputFirstName">
            First Name:{" "}
          </label>
          <input
            type="text"
            name="firstName"
            id="inputFirstName"
            placeholder="ex. Neil"
            autoFocus="true"
            width={30}
            value={newStudent.firstName}
            onChange={handleChange}
            required
          /> */}
        <label className="form-label" htmlFor="inputMiddle">
          Middle Name:{" "}
        </label>
        <input
          type="text"
          name="middleName"
          id="inputMiddle"
          placeholder="ex. Alden"
          width={30}
          value={newStudent.middleName}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="inputLastName">
          Last Name:{" "}
        </label>
        <input
          type="text"
          name="lastName"
          id="inputLastName"
          placeholder="ex. Armstrong"
          width={30}
          value={newStudent.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <br />

      <div>
        <label className="form-label" htmlFor="inputStudentNumber">
          Student Number:{" "}
        </label>
        <input
          type="number"
          name="studentNumber"
          id="inputStudentNumber"
          placeholder="ex. 11183021"
          maxLength={8}
          width={30}
          value={newStudent.studentNumber}
          onChange={handleChange}
          required
        />
      </div>
      <br />

      <div>
        <h4>Class Year</h4>
        <input
          type="radio"
          id="radioFreshman"
          name="classYear"
          value="Freshman"
          checked={(newStudent.classYear = "Freshman")}
          onChange={handleChange}
        />
        <label htmlFor="radioFreshman"> Freshman</label>
        <input
          type="radio"
          id="radioSophmore"
          name="classYear"
          value="Sophmore"
          checked={(newStudent.classYear = "Sophmore")}
          onChange={handleChange}
        />
        <label htmlFor="radioSophmore"> Sophmore</label>
        <input
          type="radio"
          id="radioJunior"
          name="classYear"
          value="Junior"
          checked={(newStudent.classYear = "Junior")}
          onChange={handleChange}
        />
        <label htmlFor="radioJunior"> Junior</label>
        <input
          type="radio"
          id="radioSenior"
          name="classYear"
          value="Senior"
          checked={(newStudent.classYear = "Senior")}
          onChange={handleChange}
        />
        <label htmlFor="radioSenior"> Senior</label>
      </div>
      <br />

      <div>
        <label className="form-label" htmlFor="inputEmail">
          Student Email:{" "}
        </label>
        <input
          type="email"
          name="studentEmail"
          id="inputEmail"
          placeholder="myemail@school.edu"
          width={30}
          value={newStudent.studentEmail}
          onChange={handleChange}
          required
        />
      </div>
      <br />

      <div>
        <button type="submit">Submit</button>
        <button>Clear</button>
      </div>
  
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

export default connect(mapStateToProps, { addStudent })(AddStudentForm);
