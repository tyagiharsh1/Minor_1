import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";
import "./Login.scss";
function Login() {
  //fetch the data::
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  //function to handle Data on submit
  async function handleSubmit(event) {
    event.preventDefault(); //prevent the default behaviour of form
    console.log("I'm here");
    try {
      console.log(userEmail);
      console.log(userPassword);
      const result = await axiosClient.post(
        "/auth/login",
        //send the data in the body of API
        {
          email: userEmail,
          password: userPassword,
        }
      );
      console.log(result);
      setItem(KEY_ACCESS_TOKEN, result.data.response.accessToken); //save the access token to localStorage
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="Login">
      <div className="login-box">
        <h2 className="login-heading">Login</h2>
        <Form onSubmitCapture={handleSubmit} className="form">
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              type="email"
              id="email"
              
              onChange={(event) => setUserEmail(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              type="password"
              id="password"
              onChange={(event) => setUserPassword(event.target.value)}
            />
          </Form.Item>

          <input type="submit" className="login-submit login-input" />
        </Form>
        <p className="signup-Navigate">
          Create an Account?
          <span>
            <Link className="link" to="/signup">
              Signup
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
