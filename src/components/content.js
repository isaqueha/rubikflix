import React, { useEffect, useState } from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Movies from "./movies";

const useStyles = makeStyles({
  grid: {
    flexDirection: "column",
    alignItems: "center",
  },
});

const titles = {
  discover: "Discover",
  search: "Search Results",
};

const Content = ({ query, rating }) => {
  const classes = useStyles();
  const [title, setTitle] = useState(titles.discover);

  useEffect(() => {
    if (query !== "") {
      setTitle(titles.search);
    } else {
      setTitle(titles.discover);
    }
  }, [query]);

  return (
    <Grid container justify="center" className={classes.grid}>
      <Box width="auto" paddingTop={4}>
        <Typography align="center" variant="h5" style={{ color: "white" }}>
          {title}
        </Typography>
      </Box>
      <Movies query={query} rating={rating} />
    </Grid>
  );
};

export default Content;
