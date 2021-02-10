import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Movies from './movies';

const paths = {
    discover: '/discover/movie',
    search: '/search/movie',
  };

  const titles = {
    discover: 'Discover new Movies:',
    search: 'Search Results:',
  };

const Discover = ({ query, rating }) => {
    const [path, setPath] = useState(paths.discover);
    const [title, setTitle] = useState(titles.discover);

  useEffect(() => {
    if (query !== '') {
      setPath(paths.search);
      setTitle(titles.search);
    } else {
      setPath(paths.discover);
      setTitle(titles.discover);
    }
  }, [query]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography align="left" variant="h3">
        {title}
      </Typography>
      <Movies path={path} query={query} ratingFilter={rating} />
    </Grid>
  );
};

export default Discover;
