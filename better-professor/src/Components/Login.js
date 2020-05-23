import React, { useState } from "react";

const Login = () => {

  //////////set state for login data///////
  const [ loginData, setLoginData ] = useState({
    email: "",
    password: "",
  })

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
      console.log(e)
    }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label>
          Email
          <input type="text" name="email" placeholder="Enter your email address"
          value={loginData.email}
          onChange={handleChanges}
          />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Create a password"
          value={loginData.password}
          onChange={handleChanges}
          />
        </label>
        <button>Log In</button>
      </form>

    </div>
  )
}

export default Login;