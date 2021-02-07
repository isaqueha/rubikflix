import React from "react";
import './App.css';
import { TextField } from '@material-ui/core';
import Discover from './components/discover';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField id="outlined-basic" label="Search Movies" variant="outlined" />
        <Discover />

      </header>
    </div>
  );
}

export default App;
