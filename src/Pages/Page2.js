import React, { Component } from "react";
import { Breadcrumb } from "antd";

class Page2 extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-header">
          <Breadcrumb>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Page2</Breadcrumb.Item>
          </Breadcrumb>
          <p className="page-title">Page2</p>
        </div>
        <div className="content-body">
          <p className="title">Welcome To Page2</p>
        </div>
      </div>
    );
  }
}

export default Page2;
