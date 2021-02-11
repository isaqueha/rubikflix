import React, { useState } from 'react';
import './App.css';
import Discover from './components/discover';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/detail';
import Header from './components/header';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  app: {
    height: '90vh',
  },
  header: {
    height: '10vh',
    backgroundColor: '#282c34',
    minHeight: '5vh',
    color: 'white',
  },
  content: {
    overflow: 'auto',
    maxHeight: '100%',
  },
});

function App() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState(null);

  const handleSearch = (event) => {
    const searchString = event.target.value;
    setSearch(searchString);
  };

  const handleRating = (event) => {
    const ratingValue = event.target.value * 2;
    if (ratingValue !== rating) {
      setRating(ratingValue);
    } else {
      // clear the filter
      setRating(null);
    }
  };

  return (
    <Router>
      <div className={classes.app}>
        <Box className={classes.header}>
          <Header
            handleSearchChange={handleSearch}
            handleRatingChange={handleRating}
          />
        </Box>
        <Box className={classes.content}>
          <Switch>
            <Route path="/movie">
              <Detail />
            </Route>
            <Route exact path="/">
              <Discover query={search} rating={rating} />
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  );
}

export default App;
