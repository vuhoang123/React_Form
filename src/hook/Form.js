import React, { useEffect, useState } from "react";
import { Card, Input, Select, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./form.module.css";
import * as yup from "yup";
import isEmpty from "lodash.isempty";

const userSchema = yup.object().shape({
  username: yup.string().required("*Vui lòng nhập username"),
  name: yup
    .string()
    .required("*Vui lòng nhập name")
    .matches(/^[A-Za-z ]+$/g, "*Họ tên phải nhập chữ"),
  password: yup
    .string()
    .required("*Vui lòng nhập pass")
    .min(8, "*Nhập ít nhất 8 kí tự")
    .max(16, "*Nhập tối đa 16 kí tự"),
  phone: yup
    .string()
    .required("*Vui lòng nhập phone")
    .matches(/^[0-9]+$/g),
  email: yup
    .string()
    .required("*Vui lòng nhập email")
    .email("*Email không đúng định dang"),
  role: yup.string().required("*Vui lòng nhập role"),
});

function Form(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!props.selectedUser) return;
    if (props.selectedUser.id === user.id) return;

    setUser(props.selectedUser);
  }, [props.selectedUser]); //eslint-disable-line

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSelect(name, val) {
    setUser({ ...user, [name]: val });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isValid = await validateForm();
    if (!isValid) return;

    if (props.selectedUser) {
      props.updateUser(user);
    } else {
      props.createUser({ ...user, id: Math.floor(Math.random() * 1000 + 1) });
    }
    resetForm();
  }

  async function validateForm() {
    const validationErrors = {};
    try {
      await userSchema.validate(user, {
        abortEarly: false,
      });
    } catch (err) {
      const errObj = { ...err };

      errObj.inner.forEach((validationError) => {
        if (validationErrors[validationError.path]) return;
        validationErrors[validationError.path] = validationError.message;
      });

      setErrors(validationErrors);
    }

    return isEmpty(validationErrors);
  }

  function resetForm() {
    setUser({
      username: "",
      password: "",
      name: "",
      email: "",
      phone: "",
      role: "",
    });
  }

  return (
    <Card
      title="Form Đăng ký"
      headStyle={{
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Tài Khoản</label>
          <Input
            value={user.username}
            name="username"
            onChange={handleChange}
            placeholder="Tài khoản"
            prefix={<UserOutlined />}
          />
          <span>{errors.username}</span>
        </div>
        <div className={styles.formGroup}>
          <label>Họ Tên</label>
          <Input
            value={user.name}
            name="name"
            onChange={handleChange}
            placeholder="Họ tên"
            prefix={<UserOutlined />}
          />
          <span>{errors.name}</span>
        </div>
        <div className={styles.formGroup}>
          <label>Mật Khẩu</label>
          <Input
            value={user.password}
            name="password"
            onChange={handleChange}
            placeholder="Mật khẩu"
            type="password"
            prefix={<UserOutlined />}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Số điện thoại</label>
          <Input
            value={user.phone}
            name="phone"
            onChange={handleChange}
            placeholder="số dt"
            prefix={<UserOutlined />}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <Input
            value={user.email}
            name="email"
            onChange={handleChange}
            placeholder="email"
            prefix={<UserOutlined />}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Mã loại người dùng</label>
          <Select
            value={user.role}
            onChange={(val) => handleSelect("role", val)}
            className={styles.select}
          >
            <Select.Option value="khachHang">Khách hàng</Select.Option>
            <Select.Option value="quanTri">Quản trị viên</Select.Option>
          </Select>
        </div>

        <div className={styles.btn}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={resetForm} type="default">
            Reset
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Form;
