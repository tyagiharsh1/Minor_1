// // import React, { useState } from "react";
// // import { Link,useNavigate } from "react-router-dom";
// // import { axiosClient } from "../../utils/axiosClient";
// // import { Button, Checkbox, Form, Input } from "antd";
// // import "./Signup.scss";
// // function Signup() {
// //   //fetch the data::
// //   const [userEmail, setUserEmail] = useState("");
// //   const [userName, setUserName] = useState("");
// //   const [userPassword, setUserPassword] = useState("");
// //   const [userage, setUserage] = useState("");
// //   const [userBloodgroup, setUserBloodgroup] = useState("");
// //   const [userCity, setUserCity] = useState("");
// //   const [userphone_no, setUserphone_no] = useState("");
// //   const navigate = useNavigate();
// //   //function to handle Data on submit
// //   async function handleSubmit(event) {
// //     event.preventDefault(); //prevent the default behaviour of form
// //     try {
// //       await axiosClient.post(
// //         "/auth/signup",
// //         //send the data in the body of API
// //         {
// //           email: userEmail,
// //           name: userName,
// //           password: userPassword,
// //           age:userage,
// //           blood_group:userBloodgroup,
// //           city:userCity,
// //           phone_no:userphone_no,
// //         }
// //       );
// //       navigate("/");
// //     } catch (error) {
// //       console.log(error);
// //     }
    
// //   }
// //   return (
// //     <div className="Signup">
// //       <div className="signup-box">
// //         <h2 className="signup-heading">Signup</h2>
// //         <form onSubmit={handleSubmit}>
// //         <Form.Item
// //               name="name"
// //               label="Name"
// //               rules={[
// //                 {
// //                   type: "text",
// //                   message: "The input is not valid name",
// //                 },
// //                 {
// //                   required: true,
// //                   message: "Please input your Name!",
// //                 },
// //               ]}
// //             >

// //           <input
// //             type="text"
// //             id="name"
// //             className="signup-input"
// //             onChange={(event) => setUserName(event.target.value)}
// //           />
// //           </Form.Item>

// //           <Form.Item
// //               name="email"
// //               label="E-mail"
// //               rules={[
// //                 {
// //                   type: "email",
// //                   message: "The input is not valid E-mail!",
// //                 },
// //                 {
// //                   required: true,
// //                   message: "Please input your E-mail!",
// //                 },
// //               ]}
// //             >
// //           <input
// //             type="email"
// //             id="email"
            
// //             className="signup-input"
// //             onChange={(event) => setUserEmail(event.target.value)}
// //           />
// //           </Form.Item>

// //           <Form.Item
// //               name="password"
// //               label="Password"
// //               rules={[
// //                 {
// //                   required: true,
// //                   message: "Please input your password!",
// //                 },
// //               ]}
// //               hasFeedback
// //             >
// //           <Input
// //             type="password"
// //             id="password"
// //             className="signup-input"
// //             onChange={(event) => setUserPassword(event.target.value)}
// //           />
// //           </Form.Item>
// //            <label htmlFor="blood-group">Blood-Group</label>
// //           <input
// //             type="string"
// //             id="blood-group"
// //             className="login-input"
// //             onChange={(event) => setUserBloodgroup(event.target.value)}
// //           />
// //              <Form.Item
// //               name="age"
// //               label="Age"
// //               rules={[
// //                 {
// //                   required: true,
// //                   message: "Please input your password!",
// //                 },
// //               ]}
// //               hasFeedback
// //             >
// //           <input
// //             type="number"
// //             id="age"
// //             className="login-input"
// //             onChange={(event) => setUserage(event.target.value)}
// //           />
// //           </Form.Item>
          
// //           <Form.Item
// //               name="no"
// //               label="Number"
// //               rules={[
// //                 {
// //                   required: true,
// //                   message: "Please input your Number",
// //                 },
// //               ]}
// //               hasFeedback
// //             >
// //           <input
// //             type="string"
// //             id="no"
// //             className="login-input"
// //             onChange={(event) => setUserphone_no(event.target.value)}
// //           />
// //           </Form.Item>

// //           <Form.Item
// //               name="city"
// //               label="City"
// //               rules={[
// //                 {
// //                   required: true,
// //                   message: "Please entre  your City",
// //                 },
// //               ]}
// //               hasFeedback
// //             >

// //           <input
// //             type="string"
// //             id="city"
// //             className="login-input"
// //             onChange={(event) => setUserCity(event.target.value)}
// //           />
// //           </Form.Item>
// //           <input type="submit" className="signup-submit" />
// //         </form>
// //         <p className="login-Navigate">
// //           Already have an Account?
// //           <span>
// //             <Link className="link" to="/login">
// //               Login
// //             </Link>
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { axiosClient } from "../../utils/axiosClient";
// import { Button, Form, Input, message, Select } from "antd";
// import "./Signup.scss";

// const { Option } = Select;

// function Signup() {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   const handleSubmit = async (values) => {
//     try {
//       await axiosClient.post("/auth/signup", {
//         email: values.email,
//         name: values.name,
//         password: values.password,
//         age: values.age,
//         blood_group: values.blood_group,
//         city: values.city,
//         phone_no: values.phone_no,
//       });
//       message.success("Signup successful!");
//       navigate("/");
//     } catch (error) {
//       message.error("Signup failed. Please try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="Signup">
//       <div className="signup-box">
//         <h2 className="signup-heading">Signup</h2>
//         <Form
//           form={form}
//           name="signupForm"
//           onFinish={handleSubmit}
//           scrollToFirstError
//         >
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your Name!",
//               },
//             ]}
//           >
//             <Input className="signup-input" />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             label="E-mail"
//             rules={[
//               {
//                 type: "email",
//                 message: "The input is not a valid E-mail!",
//               },
//               {
//                 required: true,
//                 message: "Please input your E-mail!",
//               },
//             ]}
//           >
//             <Input className="signup-input" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             id="password"
//             style={{padding: "8px 10px" }}
//             label="Password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//             hasFeedback
//           >
//             <Input.Password className="signup-input" />
//           </Form.Item>

//           <Form.Item
//             name="blood_group"
//             label="Blood Group"
//             rules={[
//               {
//                 required: true,
//                 message: "Please select your Blood Group!",
//               },
//             ]}
//           >
//             <Select className="signup-input">
//             <Option value="A+">A+</Option>
//             <Option value="A-">A-</Option>
//             <Option value="B+">B+</Option>
//             <Option value="B-">B-</Option>
//             <Option value="AB+">AB+</Option>
//             <Option value="AB-">AB-</Option>
//             <Option value="O+">O+</Option>
//             <Option value="O-">O-</Option>
//               {/* Add other blood groups as needed */}
//             </Select>
//           </Form.Item>

//           <Form.Item
//             name="age"
//             label="Age"
//             style={{ width: "75%", padding: "8px 10px" }}
//             rules={[
//               {
//                 type: "string",
//                 min: 0,
                
//               },
//               {
//                 required: true,
//                 message: "Please input your age!",
//               },
//             ]}
//           >
//             <Input type="number" className="signup-input" />
//           </Form.Item>

//           <Form.Item
//             name="phone_no"
//             label="Phone Number"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your phone number!",
//               },
//             ]}
//           >
//             <Input className="signup-input" />
//           </Form.Item>

//           <Form.Item
//             name="city"
//             label="City"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your city!",
//               },
//             ]}
//           >
//             <Input className="signup-input" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="signup-submit">
//               Sign Up
//             </Button>
//           </Form.Item>
//         </Form>

//         <p className="login-Navigate">
//           Already have an Account?{" "}
//           <span>
//             <Link className="link" to="/login">
//               Login
//             </Link>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { Button, Form, Input, message, Select } from "antd";
import "./Signup.scss";

const { Option } = Select;

function Signup() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {

      await axiosClient.post("/auth/signup", {
        email: values.email,
        name: values.name,
        password: values.password,
        age: values.age,
        blood_group: values.blood_group,
        city: values.city,
        phone_no: values.phone_no,
      });
      message.success("Signup successful!");
      navigate("/");

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
      navigate("/search");

    } catch (error) {
      message.error("Signup failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="Signup">
      <div className="signup-box">
        <h2 className="signup-heading">Signup</h2>
        <Form
          form={form}
          name="signupForm"
          onFinish={handleSubmit}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input className="signup-input" />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not a valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input className="signup-input" />
          </Form.Item>

          <Form.Item
            name="password"
            id="password"
            style={{ padding: "8px 10px" }}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password className="signup-input" />
          </Form.Item>

          <Form.Item
            name="blood_group"
            label="Blood Group"
            rules={[
              {
                required: true,
                message: "Please select your Blood Group!",
              },
            ]}
          >
            <Select className="signup-input">
              <Option value="A+">A+</Option>
              <Option value="A-">A-</Option>
              <Option value="B+">B+</Option>
              <Option value="B-">B-</Option>
              <Option value="AB+">AB+</Option>
              <Option value="AB-">AB-</Option>
              <Option value="O+">O+</Option>
              <Option value="O-">O-</Option>
              {/* Add other blood groups as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            style={{ width: "75%", padding: "8px 10px" }}
            rules={[
              {
                type: "string",
                min: 0,
              },
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <Input type="number" className="signup-input" />
          </Form.Item>

          <Form.Item
            name="phone_no"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input className="signup-input" />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                required: true,
                message: "Please input your city!",
              },
            ]}
          >
            <Input className="signup-input" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="signup-submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <p className="login-Navigate">
          Already have an Account?{" "}
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

export default Signup;
