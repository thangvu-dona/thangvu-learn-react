import { Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort(props) {
  const { currentSort, onChange } = props;
  const handleSortChange = (e, value) => {
    if (onChange) onChange(value);
  };

  return (
    <Tabs
      value={currentSort}
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Price: Low to High" value="salePrice:ASC" />
      <Tab label="Price: High to Low" value="salePrice:DESC" />
      {/* value is followed by strapi API */}
    </Tabs>
  );
}

export default ProductSort;
