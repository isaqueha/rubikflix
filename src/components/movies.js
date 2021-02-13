import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import api from "../services/api";
import MovieCard from "./movieCard";

const useStyles = makeStyles({
  root: {
    color: "white",
    height: "calc(100vh - 9rem)",
  },
});

const paths = {
  discover: "/discover/movie",
  search: "/search/movie",
};

const Movies = ({ query, rating }) => {
  const classes = useStyles();
  const [titles, setTitles] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchPath = async (path) => {
      let request = await api.get(path, {
        params: {
          query: query,
        },
      });
      setTitles(request.data.results);
    };

    let path = "";
    if (query !== "") {
      path = paths.search;
    } else {
      path = paths.discover;
    }

    fetchPath(path);
  }, [query]);

  useEffect(() => {
    if (rating === null) {
      setFilteredResults(titles);
      return;
    }
    let filteredResults = titles.filter(
      (title) => title.vote_average >= rating
    );
    setFilteredResults(filteredResults);
  }, [rating, titles]);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {filteredResults.length ? (
        filteredResults.map((title, index) => (
          <MovieCard key={index} title={title} />
        ))
      ) : (
        <Typography>No Movies Found</Typography>
      )}
    </Grid>
  );
};

export default Movies;
