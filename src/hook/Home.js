import React, { useState } from "react";
import Form from "./Form";
import UserList from "./UserList";

function Home() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  function createUser(user) {
    const foundUser = userList.find((item) => {
      return item.username === user.username;
    });

    if (foundUser) return alert("Tài khoản đã tồn tại");

    setUserList([...userList, user]);
  }

  function deleteUser(id) {
    const cloneUserList = [...userList];
    const index = cloneUserList.findIndex((user) => user.id === id);
    if (index === -1) return;
    cloneUserList.splice(index, 1);

    setUserList(cloneUserList);
  }

  function getUpdateUser(user) {
    setSelectedUser(user);
  }

  function updateUser(user) {
    const cloneUserList = [...userList];
    const index = cloneUserList.findIndex((item) => item.id === user.id);
    if (index === -1) return;
    cloneUserList[index] = user;
    // automatic batching
    setUserList(cloneUserList);
    setSelectedUser(null);
  }

  return (
    <div>
      <h1>Quản Lý User</h1>
      <Form
        selectedUser={selectedUser}
        createUser={createUser}
        updateUser={updateUser}
      />
      <UserList
        getUpdateUser={getUpdateUser}
        deleteUser={deleteUser}
        users={userList}
      />
    </div>
  );
}

export default Home;
