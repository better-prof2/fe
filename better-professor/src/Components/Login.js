import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Theme from "./ui/Theme";
import clouds from "./ui/Images/clouds.jpg";

//////////material-ui variables///////
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${clouds})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  form: {
    // width: 'auto',
  },
}));

const Login = () => {
  //////////set state for login data///////
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //////////change handler///////////
  const handleChanges = (e) => {
    setLoginData({
      ...loginData,
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
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={5}
      >
        <Grid item>

       
        <Grid item>
          <Typography
            variant="h5"
            style={{ color: theme.palette.primary.main }}
          >
            Login
          </Typography>
        </Grid>
        <Grid item container style={{ marginTop: "2em" }}>
          <form onSubmit={handleSubmit}>
            <Grid item>
              <TextField
                variant="outlined"
                label="Email"
                type="text"
                name="email"
                placeholder="Enter your email address"
                value={loginData.email}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item style={{ marginTop: "1em" }}>
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={loginData.password}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button fullWidth variant="contained" color="primary">
                Login
              </Button>
            </Grid>
          </form>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={7}></Grid>
    </Grid>
  );
};

export default Login;
