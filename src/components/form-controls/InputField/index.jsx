import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        as={TextField}
        margin="normal"
        variant="outlined"
        fullWidth
        label={label}
        disabled={disabled}
        error={!!hasError}
        helperText={errors[name]?.message}
      />
    </div>
  );
}

export default InputField;
