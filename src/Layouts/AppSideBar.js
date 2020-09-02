import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter } from "react-router-dom";

import {
  HomeOutlined,
  UserOutlined,
  CheckCircleTwoTone,
  SmileTwoTone,
  HeartTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import AppHeader from "./AppHeader";

const { Sider } = Layout;

class AppSideBar extends React.Component {
  state = {
    collapsed: false,
  };

  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className="layout-sider"
          onClick={this.handleToggle}
        >
          {this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          <Menu defaultSelectedKeys={["_home"]} mode="inline">
            <Menu.Item key="_home" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item
              key="_cases"
              icon={<HeartTwoTone twoToneColor="#eb2f96" />}
            >
              Page 2
            </Menu.Item>
            <Menu.Item key="_payment" icon={<SmileTwoTone />}>
              Page 3
            </Menu.Item>
            <Menu.Item
              key="_calendar"
              icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
            >
              Page 4
            </Menu.Item>
            <Menu.Item key="_profile" icon={<UserOutlined />}>
              Page 5
            </Menu.Item>
          </Menu>
          <div className="logo-part">
            <img
              src={"logo"}
              className={this.state.collapsed ? "logo-img-small" : "logo-img"}
              alt="logo"
            />
            <br />
            {!this.state.collapsed ? (
              <div>
                <span className="logo-title">Logo</span>
                <br />
                <span className="copyright-txt">Novartus</span>
              </div>
            ) : (
              ""
            )}
            <p className="copyright-txt">© 2020</p>
          </div>
        </Sider>
        <div style={{ width: "100%", height: "90vh" }}>
          <AppHeader />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppSideBar;
