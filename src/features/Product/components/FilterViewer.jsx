import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",

    margin: "16px 0",
    padding: "0",
    listStyleType: "none",

    "& > li": {
      padding: "8px",
    },
  },
  list: {},
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Miễn Phí Giao Hàng",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      newFilters.isFreeShip
        ? delete newFilters.isFreeShip
        : (newFilters.isFreeShip = true);

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Có Khuyến Mãi",
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;

      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_lte") &&
      Object.keys(filters).includes("salePrice_gte"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;

      return newFilters;
    },
    onToggle: () => {},
  },
  // {
  //   id: 4,
  //   getLabel: () => "Danh Mục",
  //   isActive: () => true,
  //   isVisible: (filters) => true,
  //   isRemovable: true,
  //   onRemove: (filters) => {},
  //   onToggle: (filters) => {},
  // },
];

function FilterViewer({ filters = {}, onChange = null }) {
  const classes = useStyles();

  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <Box component="ul" className={classes.root}>
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            clickable={!x.isRemovable}
            color={x.isActive(filters) ? "primary" : "default"}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
