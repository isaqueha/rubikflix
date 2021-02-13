import React, { useState } from "react";
import Content from "./components/content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/detail";
import Header from "./components/header";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
    setSearch(searchString.trim());
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
        <Header
          handleSearchChange={handleSearch}
          handleRatingChange={handleRating}
        />
        <Box className={classes.content}>
          <Switch>
            <Route path="/movie">
              <Detail />
            </Route>
            <Route exact path="/">
              <Content query={search} rating={rating} />
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  );
}

export default App;
