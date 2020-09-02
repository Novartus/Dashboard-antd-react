import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import {
  HomeOutlined,
  UserOutlined,
  CheckCircleTwoTone,
  SmileTwoTone,
  HeartTwoTone,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
} from "@ant-design/icons";
import AppHeader from "./AppHeader";
import Home from "../Pages/Home";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";

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
          // onClick={this.handleToggle}
        >
          {/* {this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
          <br />
          <br />
          <Menu defaultSelectedKeys={["_home"]} mode="inline">
            <Menu.Item key="_home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              key="_page2"
              icon={<HeartTwoTone twoToneColor="#eb2f96" />}
            >
              <Link to="/page2">Page 2</Link>
            </Menu.Item>

            <Menu.Item key="_page3" icon={<SmileTwoTone />}>
              <Link to="/page3">Page 3</Link>
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/page3" component={Page3} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppSideBar;
