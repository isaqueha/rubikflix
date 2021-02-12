import React, { useState } from "react";
import {
  Box,
  Grid,
  Hidden,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  search: {
    margin: 10,
    maxWidth: "50rem",
    flexGrow: 1,
  },
  ratingHover: {
    textAlign: "left",
    color: "#ffb400",
    marginLeft: "1rem",
  },
});

const Header = ({ handleSearchChange, handleRatingChange }) => {
  const [ratingValue, setRatingValue] = useState("");
  const [ratingHover, setRatingHover] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      history.push(`/`);
    } 
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <TextField
        id="outlined-basic"
        className={classes.search}
        label="Search Movies"
        variant="outlined"
        onChange={(event) => handleSearchChange(event)}
        onKeyPress={handleKeyPress}
      />
      <Grid>
        <Hidden only='xs'>
        <Grid container direction="row">
          <Typography align="left">Filter by rating:</Typography>
          {ratingHover !== null && (
            <Box width={30}>
              <Typography className={classes.ratingHover}>
                {ratingHover > -1 ? ratingHover : ratingValue}
              </Typography>
            </Box>
          )}
        </Grid>
        <Rating
          name="half-rating"
          defaultValue={5}
          precision={0.5}
          size="large"
          onChange={(event, newValue) => {
            if(newValue === null) {
              setRatingHover(newValue);  
            } 
            setRatingValue(newValue ? newValue * 2: newValue);
            handleRatingChange(event);
          }}
          onChangeActive={(event, newHover) => {
            setRatingHover(newHover * 2);
          }}
        />
      </Hidden>
      </Grid>
    </Grid>
  );
};

export default Header;
