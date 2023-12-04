import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar} from "antd";
import Logo from '../../assets/logo.jpg'
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="left-side">
        <div className="logo-img">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="right-side">
        <div className="user-section">
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
