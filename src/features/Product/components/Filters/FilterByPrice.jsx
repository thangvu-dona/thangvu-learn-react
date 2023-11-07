import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    borderTop: "1px solid crimson",
  },
  range: {
    display: "flex",
    flexFlow: "row no-wrap",
    alignItems: "center",

    marginTop: "16px",
    marginBottom: "16px",

    "& > span": {
      margin: "auto 12px",
    },
  },
}));

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  return (
    <Box className={classes.root}>
      <Typography>Range of Price</Typography>
      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span> - </span>
        <TextField
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Apply
      </Button>
    </Box>
  );
}

export default FilterByPrice;
