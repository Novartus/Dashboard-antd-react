import React, { Component } from "react";
import { Table, Input, Button, Divider, Dropdown, Menu } from "antd";
import {
  PrinterOutlined,
  MoreOutlined,
  FilterOutlined,
} from "@ant-design/icons";
const { Search } = Input;

const moreMenu = (
  <Menu>
    <Menu.Item key="0">Action 0</Menu.Item>
    <Menu.Item key="1">Action 1</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Action 3</Menu.Item>
  </Menu>
);

class HomeTable extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: "10px 0 20px 0" }}>
          <Search
            placeholder="Search By User, Id"
            onSearch={(value) => console.log(value)}
            style={{ width: 350 }}
          />
          <div style={{ float: "right" }} size="small">
            <Button type="default" icon={<PrinterOutlined />}>
              Print
            </Button>

            <Divider
              type="vertical"
              style={{ background: "grey", height: 30, margin: "0 20px" }}
            />

            <Dropdown overlay={moreMenu} trigger={["click"]}>
              <Button
                type="default"
                icon={<FilterOutlined />}
                style={{ marginRight: 10 }}
              />
            </Dropdown>

            <Dropdown overlay={moreMenu} trigger={["click"]}>
              <Button type="default" icon={<MoreOutlined />} />
            </Dropdown>
          </div>
        </div>
        <Table {...this.props} pagination={{ pageSize: 3 }} />
      </div>
    );
  }
}

export default HomeTable;
