import { Button, Card, Input, Table } from "antd";
import React, { useState } from "react";

const { Search } = Input;

function UserList(props) {
  const [searchInput, setSearchInput] = useState();
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  const columns = [
    {
      title: "Mã SV",
      dataIndex: "studentId",
    },
    {
      title: "Họ Tên",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số ĐT",
      dataIndex: "phone",
    },
    {
      title: "",
      key: "action",
      render: (_, user) => {
        return (
          <>
            <Button onClick={() => props.getUpdateUser(user)} type="primary">
              Chỉnh sửa
            </Button>
            <Button onClick={() => props.deleteUser(user.id)}>Xoá</Button>
          </>
        );
      },
    },
  ];

  return (
    <Card
      title="Danh sách sinh viên"
      headStyle={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <Search
        placeholder="input search text"
        onChange={(e) => searchItems(e.target.value)}
      />
      <Table
        dataSource={props.users.map((user) => {
          return { ...user, key: user.id };
        })}
        columns={columns}
      ></Table>
    </Card>
  );
}

export default UserList;
