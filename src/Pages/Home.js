/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Breadcrumb, Row, Col } from "antd";
import { ReconciliationTwoTone } from "@ant-design/icons";
import HomeTable from "../Components/HomeTable";
import { columns, data } from "../utils/Constants/Columns";

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="content-header">
          <Breadcrumb>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <p className="page-title">Home</p>
        </div>

        <div className="content-body">
          <div className="box" style={{ paddingLeft: 44, paddingRight: 44 }}>
            <p className="title">Welcome To DataDash</p>
            <Row style={{ paddingTop: 10 }} gutter={[40]}>
              <Col span={6}>
                <div style={{ marginBottom: 10 }}>
                  <ReconciliationTwoTone
                    className="font-icon"
                    twoToneColor="#eb2f96"
                  />
                  <span
                    className="font1"
                    style={{ paddingLeft: 20, position: "absolute" }}
                  >
                    Home 1
                  </span>
                </div>
                <p className="font2">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document.
                </p>
                <br />
                <a href="#" className="font3">
                  Link
                </a>
              </Col>

              <Col span={6}>
                <div style={{ marginBottom: 10 }}>
                  <ReconciliationTwoTone
                    className="font-icon"
                    twoToneColor="#52c41a"
                  />
                  <span
                    className="font1"
                    style={{ paddingLeft: 20, position: "absolute" }}
                  >
                    Home 2
                  </span>
                </div>
                <p className="font2">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document.
                </p>
                <a href="#" className="font3">
                  Link
                </a>
              </Col>

              <Col span={6}>
                <div style={{ marginBottom: 10 }}>
                  <ReconciliationTwoTone className="font-icon" />
                  <span
                    className="font1"
                    style={{ paddingLeft: 20, position: "absolute" }}
                  >
                    Home 3
                  </span>
                </div>

                <p className="font2">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document.
                </p>

                <a href="#" className="font3">
                  Link
                </a>
              </Col>

              <Col span={6}>
                <div style={{ marginBottom: 10 }}>
                  <ReconciliationTwoTone
                    className="font-icon"
                    twoToneColor="#656de9"
                  />
                  <span
                    className="font1"
                    style={{ paddingLeft: 20, position: "absolute" }}
                  >
                    Home 4
                  </span>
                </div>

                <p className="font2">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document.
                </p>

                <a href="#" className="font3">
                  Link
                </a>
              </Col>
            </Row>
          </div>

          <div className="box" style={{ marginTop: 10 }}>
            <HomeTable
              pagination={false}
              columns={columns}
              dataSource={data}
              rowSelection={{ type: "checkbox" }}
            />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
