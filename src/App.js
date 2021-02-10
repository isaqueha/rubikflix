import React, { useState } from "react";
import './App.css';
import { makeStyles, TextField } from '@material-ui/core';
import Discover from './components/discover';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  search: {
    margin: 10,
    width: '30rem'
  },
});


function App() {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  };

  const handleRatingFilter = (event) => {
    alert(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TextField id="outlined-basic" className={classes.search} label="Search Movies" variant="outlined" onChange={event => handleSearchChange(event)} />
        <Rating name="half-rating" defaultValue={5} precision={0.5} onChange={event => handleRatingFilter(event)} />
        <Discover path='search/movie' query={search} />
        <Discover path='discover/movie' />

      </header>
    </div>
  );
}

export default App;
