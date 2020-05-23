import React, { useState } from "react";

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
    console.log(e)
  }

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input 
          type="text" 
          name="name" 
          placeholder="Enter your full name"
          value={signupData.name} 
          onChange={handleChanges}/>
        </label>
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
          <input type="password" name="name" placeholder="Re-enter password" 
           value={signupData.confirm}
           onChange={handleChanges}
          />
        </label>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
