import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import InputField from "components/form-controls/InputField"; // need jsconfig.json
import InputField from "../../../../components/form-controls/InputField";
import { Avatar, Button, Typography, createTheme } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import PasswordField from "../../../../components/form-controls/PasswordField";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onSubmit: null,
};

function RegisterForm(props) {
  const { onSubmit } = props;

  // goes schema here for translation - i18n
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter your Fullname."),
    email: yup
      .string()
      .required("Please enter your Email.")
      .email("Plese enter your valid email"),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values) => {
    if (!onSubmit) return;
    onSubmit(values);

    form.reset();
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h3" variant="h5" sx={{ m: 1 }}>
        Sign in
      </Typography>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create an account
        </Button>
      </form>
    </>
  );
}

export default RegisterForm;
