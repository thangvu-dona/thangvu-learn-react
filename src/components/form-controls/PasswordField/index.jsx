import { FormHelperText, Input } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];

  // password
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="outlined"
        fullWidth
        margin="normal"
      >
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          as={Input}
          id={name}
          type={showPassword ? "text" : "password"}
          label={{ label }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          disabled={disabled}
          error={!!hasError}
          // helperText={errors[name]?.message} // this Input control not support helperText --> use FormHelperText instead
        />

        <FormHelperText error={!!hasError}>
          {errors[name]?.message}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
