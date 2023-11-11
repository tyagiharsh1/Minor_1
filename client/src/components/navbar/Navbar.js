import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Space } from "antd";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="left-side">
          <h2>Logo</h2>
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
