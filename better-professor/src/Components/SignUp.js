import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Theme from "./ui/Theme";
import bluepencils from "./ui/Images/blue-pencils.jpg";
import * as Yup from "yup";
import { withFormik } from "formik";

//////////////yup form schema///////////
const formSchema = Yup.object().shape({
  name: Yup.string().required("Enter name"),
  email: Yup
    .string()
    .email("Enter a valid email")
    .required("Please enter your email"),
  password: Yup.string().min(8, "Must include at least 8 characters"),
  confirm: Yup.string().min(5, "Must include at least 5 characters"),
});

//////////material-ui variables///////
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${bluepencils})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  form: {
    // width: 'auto',
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

  ////////set error state and validate//////////
  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const validate = (event) => {
    Yup
      .reach(formSchema, event.target.name)
      .validate(event.target.name)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0],
        });
      });
  };

  ////////changeHandler//////////
  const handleChanges = (e) => {
    // console.log(e.target.value);
    e.persist();
    validate(e);
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  /////////handle submit////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(e);
    console.log('submitted');
    
  };

  /////////material-ui variables////////
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        className={classes.form}
        direction="column"
        justify="center"
        alignItems="center"
        lg={5}
      >
        <Grid item>
          <Grid item>
            <Typography
              variant="h5"
              style={{
                color: theme.palette.primary.main,
              }}
            >
              Sign Up{" "}
            </Typography>{" "}
          </Grid>{" "}
          <Grid
            item
            container
            style={{
              marginTop: "2em",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Full Name"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={signupData.name}
                  onChange={handleChanges}
                />{" "}
              </Grid>{" "}
              <Grid
                item
                style={{
                  marginTop: "1em",
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={signupData.email}
                  onChange={handleChanges}
                />{" "}
              </Grid>{" "}
              <Grid
                item
                style={{
                  marginTop: "1em",
                }}
              >
                <TextField
                  variant="outlined"
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  value={signupData.password}
                  onChange={handleChanges}
                />{" "}
              </Grid>{" "}
              <Grid
                item
                style={{
                  marginTop: "1em",
                }}
              >
                <TextField
                  variant="outlined"
                  label="Confirm Password"
                  type="password"
                  name="confirm"
                  placeholder="Re-enter password"
                  value={signupData.confirm}
                  onChange={handleChanges}
                />{" "}
              </Grid>{" "}
              <Grid
                item
                container
                justify="center"
                style={{
                  marginTop: "2em",
                }}
              >
                <Button fullWidth variant="contained" color="primary">
                  Create Account{" "}
                </Button>{" "}
              </Grid>{" "}
            </form>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Grid>{" "}
      <Grid item container className={classes.background} lg={7}>
        {" "}
      </Grid>{" "}
    </Grid>
  );
};

export default SignUp;
