import React, { useState } from 'react';
import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  search: {
    margin: 10,
    width: '30rem',
  },
});

const Header = ({ handleSearchChange, handleRatingChange }) => {
  const [ratingValue, setRatingValue] = useState('');
  const [ratingHover, setRatingHover] = useState('');
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <TextField
        id="outlined-basic"
        className={classes.search}
        label="Search Movies"
        variant="outlined"
        onChange={(event) => handleSearchChange(event)}
      />
      <Grid>
        <Typography align="left">Filter by rating:</Typography>
        <Grid container direction="row">
          <Rating
            name="half-rating"
            defaultValue={5}
            precision={0.5}
            size="large"
            onChange={(event, newValue) => {
              setRatingValue(newValue);
              handleRatingChange(event);
            }}
            onChangeActive={(event, newHover) => {
              setRatingHover(newHover);
            }}
          />
          {ratingHover !== null && (
            <Box width={50}>
              <Typography align="left" width={50}>
                {ratingHover !== -1 ? ratingHover : ratingValue}
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
