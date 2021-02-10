import React, { useState } from 'react';
import './App.css';
import Discover from './components/discover';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/detail';
import Header from './components/header';

function App() {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');

  const handleSearch = (event) => {
    const searchString = event.target.value;
    setSearch(searchString);
  };

  const handleRating = (event) => {
    setRating(event.target.value);
    alert(event.target.value);
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
            <Discover query={search} ratingFilter={rating} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
