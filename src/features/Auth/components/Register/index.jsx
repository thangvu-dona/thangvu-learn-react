import React from "react";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = async (values) => {
    // console.log("Register form submit: ", values);

    try {
      // auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      // close Dialog
      const { closeDialog } = props;
      if (closeDialog) closeDialog();

      // do something here on register successfully
      enqueueSnackbar("Register user successfully!!!", { variant: "success" });

      console.log("New user: ", user);
    } catch (error) {
      console.log("Fail to register!", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default Register;
