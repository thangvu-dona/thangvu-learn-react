import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>Right column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
