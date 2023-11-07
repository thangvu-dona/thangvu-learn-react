import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "api/productApi";
import ProductListSkeleton from "../components/ProductListSkeleton";

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 auto",
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await productApi.getAll({ _page: 1, _limit: 10 });
    //   console.log(response);
    // }

    // fetchData();
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log("Fail to fetch product list", error);
      }

      // setLoading(false);
    })();
  });

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? (
                <ProductListSkeleton />
              ) : (
                <Typography>Product List</Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
