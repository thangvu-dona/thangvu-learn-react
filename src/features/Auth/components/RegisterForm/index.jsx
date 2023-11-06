import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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
    fullName: yup
      .string()
      .required("Please enter your Fullname.")
      .test(
        "Should have at least two world",
        "Please enter at least two world and 3 characters in each!",
        (value) =>
          value.split(" ").filter((x) => !!x && x.length >= 3).length >= 2
      ),
    email: yup
      .string()
      .required("Please enter your Email.")
      .email("Please enter your valid email."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(6, "Please enter at least 6 characters."),
    retypePassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Password does not match."),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
    // resolver: async (data, context, options) => {
    //   // you can debug your validation schema here
    //   console.log("formData", data);
    //   console.log(
    //     "validation result",
    //     await yupResolver(schema)(data, context, options)
    //   );
    //   return yupResolver(schema)(data, context, options);
    // },
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

        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </>
  );
}

export default RegisterForm;
