import React, { useState } from "react";
import { Box, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  ratingHover: {
    textAlign: "left",
    color: "#ffb400",
    marginLeft: "1rem",
  },
});

const HeaderRating = ({ handleRatingChange }) => {
  const [ratingValue, setRatingValue] = useState("");
  const [ratingHover, setRatingHover] = useState("");
  const classes = useStyles();

  return (
    <Grid>
      <Hidden only="xs">
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
            if (newValue === null) {
              setRatingHover(newValue);
            }
            setRatingValue(newValue ? newValue * 2 : newValue);
            handleRatingChange(event);
          }}
          onChangeActive={(event, newHover) => {
            setRatingHover(newHover * 2);
          }}
        />
      </Hidden>
    </Grid>
  );
};

export default HeaderRating;
