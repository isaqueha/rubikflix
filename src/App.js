import React, { useState } from "react";
import "./App.css";
import Discover from "./components/discover";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/detail";
import Header from "./components/header";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    height: "5rem",
    backgroundColor: "white",
    color: "black",
  },
  content: {
    overflow: "auto",
    height: "auto",
    maxHeight: "calc(100vh - 5rem)",
    backgroundColor: "#282c34",
  },
});

function App() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
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
      <div>
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
