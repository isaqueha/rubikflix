import React, { useState } from "react";
import './App.css';
import { TextField } from '@material-ui/core';
import Discover from './components/discover';

function App() {
  const [search, setSearch] = useState('');

  const handleSearchChange = async (event) => {
    setSearch(event.target.value)
  };

  return (
    <div className="App">
      <header className="App-header">
        <TextField id="outlined-basic" label="Search Movies" variant="outlined" onChange={event => handleSearchChange(event)} />
        <Discover path='search/movie' query={search} />
        <Discover path='discover/movie' />

      </header>
    </div>
  );
}

export default App;
