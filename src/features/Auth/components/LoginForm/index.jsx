import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmit: null,
};

function LoginForm(props) {
  const { onSubmit } = props;

  // goes schema here for translation - i18n
  const schema = yup.object().shape({
    identifier: yup.string().required("Please enter your Email."),
    password: yup.string().required("Please enter your password."),
  });
  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (values) => {
    if (!onSubmit) return;
    await onSubmit(values);

    // form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <>
      {isSubmitting && <LinearProgress />}
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h3" variant="h5" sx={{ m: 1 }}>
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign In
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
