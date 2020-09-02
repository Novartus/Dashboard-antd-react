import React from "react";
import { Button, Tag } from "antd";
import colors from "./Colors";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "UserId",
    dataIndex: "userId",
    key: "userId",
    sorter: (a, b) => a.userId - b.userId,
  },
  {
    title: "Created",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <Tag color={colors[status.toLowerCase()]}>{status}</Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Button
        type="primary"
        style={{ background: "red", borderColor: "white" }}
      >
        Delete{" "}
      </Button>
    ),
  },
];

export const data = [
  {
    key: "1",
    name: "Desmond Miles",
    userId: "47",
    created_at: "2 September 2020",
    status: "Verified",
  },
  {
    key: "2",
    name: "Ezio Auditore",
    userId: "48",
    created_at: "2 September 2020",
    status: "UnVerified",
  },
  {
    key: "3",
    name: "Yusuf Tazim",
    userId: "88",
    created_at: "2 September 2020",
    status: "Rejected",
  },
  {
    key: "4",
    name: "Arno Victor Dorian",
    userId: "34",
    created_at: "2 September 2020",
    status: "Verified",
  },
  {
    key: "5",
    name: "Edward Kenway",
    userId: "62",
    created_at: "2 September 2020",
    status: "UnVerified",
  },
  {
    key: "6",
    name: "Rebecca Crane",
    userId: "13",
    created_at: "2 September 2020",
    status: "Verified",
  },
  {
    key: "7",
    name: "Shaun Hastings",
    userId: "19",
    created_at: "2 September 2020",
    status: "Verified",
  },
];
