import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Movies from "./movies";

const titles = {
  discover: "Discover",
  search: "Search Results",
};

const Discover = ({ query, rating }) => {
  const [title, setTitle] = useState(titles.discover);

  useEffect(() => {
    if (query !== "") {
      setTitle(titles.search);
    } else {
      setTitle(titles.discover);
    }
  }, [query]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box width="auto" paddingTop={4}>
        <Typography align="center" variant="h5" style={{ color: "white" }}>
          {title}
        </Typography>
      </Box>
      <Movies query={query} rating={rating} />
    </Grid>
  );
};

export default Discover;
