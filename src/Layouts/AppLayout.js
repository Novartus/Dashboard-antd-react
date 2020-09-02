import React from "react";
import { Layout } from "antd";
import AppSideBar from "./AppSideBar";

class AppLayout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppSideBar />
      </Layout>
    );
  }
}

export default AppLayout;
