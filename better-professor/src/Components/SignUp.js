import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Theme from "./ui/Theme";
import bluepencils from "./ui/Images/blue-pencils.jpg";

//////////material-ui variables///////
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${bluepencils})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
}));

///////////SignUp function/////////////
const SignUp = () => {
  ///////useState hook for signupData/////
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  ////////changeHandler//////////
  const handleChanges = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  /////////handle submit////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  /////////material-ui variables////////
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item container direction="column" justify='center' lg={5}>
        <Grid item>
        <Typography variant="h5" style={{ color: theme.palette.primary.main }}>
          Sign Up
        </Typography>
        <Grid item containter>
          <Grid item>

          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField label='Full Name'  type="text"
              name="name"
              placeholder="Enter your full name"
              value={signupData.name}
              onChange={handleChanges} />
     
          <label>
            Email
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              value={signupData.email}
              onChange={handleChanges}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={signupData.password}
              onChange={handleChanges}
            />
          </label>
          <label>
            Confirm password
            <input
              type="password"
              name="name"
              placeholder="Re-enter password"
              value={signupData.confirm}
              onChange={handleChanges}
            />
          </label>
          <button>Create Account</button>
        </form>
        </Grid>
       
      </Grid>
      <Grid item container className={classes.background} lg={7}></Grid>
    </Grid>
  );
};

export default SignUp;
