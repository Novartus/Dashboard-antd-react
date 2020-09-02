import React, { Component } from "react";
import { Breadcrumb } from "antd";

class Page3 extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-header">
          <Breadcrumb>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Page3</Breadcrumb.Item>
          </Breadcrumb>
          <p className="page-title">Page3</p>
        </div>
        <div className="content-body">
          <p className="title">Welcome To Page3</p>
        </div>
      </div>
    );
  }
}

export default Page3;
