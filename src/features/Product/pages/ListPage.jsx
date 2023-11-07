import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "api/productApi";
import ProductListSkeleton from "../components/ProductListSkeleton";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import FilterViewer from "../components/FilterViewer";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
    paddingBottom: "20px",
  },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "20px",
  },
}));

function ListPage(props) {
  const classes = useStyles();

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    total: 10,
    limit: 9,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  // const [filters, setFilters] = useState({
  //   _page: 1,
  //   _limit: 9,
  //   _sort: "salePrice:ASC",
  // });

  const [filters, setFilters] = useState(() => ({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 9,
    _sort: queryParams._sort || "salePrice:ASC",
  }));

  useEffect(() => {
    // TODO: sync filters to URL
    const url = new URL(window.location);

    for (const key in filters) {
      url.searchParams.set(key, filters[key]);
    }
    window.history.pushState({}, "", url);
  }, [filters]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await productApi.getAll({ _page: 1, _limit: 10 });
    //   console.log(response);
    // }

    // fetchData();
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
        console.log(pagination);
      } catch (error) {
        console.log("Fail to fetch product list", error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />
              <FilterViewer filters={filters} onChange={setNewFilters} />
              {loading ? (
                <ProductListSkeleton length={9} />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  variant="outlined"
                  color="primary"
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
