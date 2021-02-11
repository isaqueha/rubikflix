import React, { useState } from 'react';
import './App.css';
import Discover from './components/discover';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/detail';
import Header from './components/header';

function App() {
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
      <div className="App">
        <header className="App-header">
          <Header
            handleSearchChange={handleSearch}
            handleRatingChange={handleRating}
          />
        </header>
        <Switch>
          <Route path="/movie">
            <Detail />
          </Route>
          <Route exact path="/">
            <Discover query={search} rating={rating} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
