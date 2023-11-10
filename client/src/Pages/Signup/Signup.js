import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import "./Signup.scss";
function Signup() {
  //fetch the data::
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userage, setUserage] = useState("");
  const [userBloodgroup, setUserBloodgroup] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userphone_no, setUserphone_no] = useState("");
  const navigate = useNavigate();
  //function to handle Data on submit
  async function handleSubmit(event) {
    event.preventDefault(); //prevent the default behaviour of form
    try {
      await axiosClient.post(
        "/auth/signup",
        //send the data in the body of API
        {
          email: userEmail,
          name: userName,
          password: userPassword,
          age:userage,
          blood_group:userBloodgroup,
          city:userCity,
          phone_no:userphone_no,
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className="Signup">
      <div className="signup-box">
        <h2 className="signup-heading">Signup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="signup-input"
            onChange={(event) => setUserName(event.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="signup-input"
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="signup-input"
            onChange={(event) => setUserPassword(event.target.value)}
          />
           <label htmlFor="blood-group">Blood-Group</label>
          <input
            type="string"
            id="blood-group"
            className="login-input"
            onChange={(event) => setUserBloodgroup(event.target.value)}
          />
           <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="login-input"
            onChange={(event) => setUserage(event.target.value)}
          />
          <label htmlFor="no">Phone_No</label>
          <input
            type="string"
            id="no"
            className="login-input"
            onChange={(event) => setUserphone_no(event.target.value)}
          />
          
          <label htmlFor="city">City</label>
          <input
            type="string"
            id="city"
            className="login-input"
            onChange={(event) => setUserCity(event.target.value)}
          />
          <input type="submit" className="signup-submit" />
        </form>
        <p className="login-Navigate">
          Already have an Account?
          <span>
            <Link className="link" to="/login">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;