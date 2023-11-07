import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      // ...filters,
      "category.id": newCategoryId,
    };

    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    if (!onChange) return;

    // const newFilters = {
    //   ...filters,
    //   ...values,
    // };

    onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
