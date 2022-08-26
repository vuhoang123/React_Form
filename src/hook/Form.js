import React, { useEffect, useState } from "react";
import { Card, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./form.module.css";
import * as yup from "yup";
import isEmpty from "lodash.isempty";

const userSchema = yup.object().shape({
  studentId: yup.string().required("*Vui lòng nhập mã sv"),
  name: yup.string().required("*Vui lòng nhập name"),
  phone: yup
    .string()
    .required("*Vui lòng nhập phone")
    .matches(/^[0-9]+$/g, "*Số điện thoại sai định dạng"),
  email: yup
    .string()
    .required("*Vui lòng nhập email")
    .email("*Email không đúng định dang"),
});

function Form(props) {
  const [user, setUser] = useState({
    studentId: "",
    name: "",
    email: "",
    phone: "",
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

  async function handleSubmit(e) {
    e.preventDefault();
    const isValid = await validateForm();
    if (!isValid) return;

    if (props.selectedUser) {
      props.updateUser(user);
    } else {
      props.createUser({ ...user });
    }
    resetForm();
    console.log(e);
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
      studentId: "",
      name: "",
      email: "",
      phone: "",
    });
  }

  return (
    <Card
      title="Thông tin sinh viên"
      headStyle={{
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Mã SV</label>
          <Input
            value={user.studentId}
            name="studentId"
            onChange={handleChange}
            placeholder="Mã sinh viên"
            prefix={<UserOutlined />}
          />
          <span>{errors.studentId}</span>
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
          <label>Số điện thoại</label>
          <Input
            value={user.phone}
            name="phone"
            onChange={handleChange}
            placeholder="số dt"
            prefix={<UserOutlined />}
          />
          <span>{errors.phone}</span>
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
          <span>{errors.email}</span>
        </div>

        <div className={styles.btn}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Form;
