import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Movies from './movies';

const paths = {
    discover: '/discover/movie',    
    search: '/search/movie',
  };

  const titles = {
    discover: 'Discover new Movies, sorted by popularity:',
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
      // By default, the discover api already brings movies sorted by popularity
    }
  }, [query]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography align="left" variant="h3">
        {title}
      </Typography>
      <Movies path={path} query={query} rating={rating} />
    </Grid>
  );
};

export default Discover;
