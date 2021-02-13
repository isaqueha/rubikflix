import React from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HeaderRating from "./headerRating";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  search: {
    margin: 10,
    maxWidth: "50rem",
    flexGrow: 1,
  },
  header: {
    height: "5rem",
    backgroundColor: "white",
    color: "black",
  },
});

const Header = ({ handleSearchChange, handleRatingChange }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      history.push(`/`);
    }
  };

  const handleSearch = () => {
    history.push(`/`);
  };

  return (
    <Box className={classes.header}>
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField
          className={classes.search}
          label="Search Movies"
          variant="outlined"
          onChange={(event) => handleSearchChange(event)}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <HeaderRating handleRatingChange={handleRatingChange} />
      </Grid>
    </Box>
  );
};

export default Header;
