/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Layout, Button, Menu, Dropdown, Avatar } from "antd";
import {
  QuestionCircleOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">Menu Item 0</Menu.Item>
    <Menu.Item key="1">Menu Item 1</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Menu Item 3</Menu.Item>
  </Menu>
);
class AppHeader extends React.Component {
  render() {
    return (
      <Header
        className="header"
        style={{ padding: "0 10px", textAlign: "right" }}
      >
        <Button
          type="text"
          shape="circle"
          size="large"
          icon={<QuestionCircleOutlined />}
        />
        <Avatar
          size="small"
          icon={<UserOutlined />}
          style={{ margin: "-5px 10px 0 20px" }}
        />
        <Dropdown overlay={menu} trigger={["click"]}>
          <a
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            style={{ color: "black" }}
          >
            Novartus <DownOutlined />
          </a>
        </Dropdown>
      </Header>
    );
  }
}

export default AppHeader;
