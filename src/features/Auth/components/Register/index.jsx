import React from "react";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleFormSubmit = async (values) => {
    // console.log("Register form submit: ", values);

    try {
      // auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      // do something here on register successfully

      console.log("New user: ", user);
    } catch (error) {
      console.log("Fail to register!", error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default Register;
