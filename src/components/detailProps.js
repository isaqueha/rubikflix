import React from "react";
import { Box, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import consts from "../services/consts";

const useStyles = makeStyles({
  title: {
    width: "100%",
  },
  ratingHover: {
    textAlign: "left",
    color: "#ffb400",
    fontSize: "2rem",
  },
  overview: {
    margin: ".5rem",
    width: "100%",
  },
  smallMargin: {
    margin: ".5rem",
  },
});

const DetailProps = ({ movieDetails }) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h3">
        {movieDetails.title}
      </Typography>
      <Rating
        name="half-rating-read"
        size="large"
        className={classes.smallMargin}
        value={movieDetails.vote_average / 2}
        precision={0.1}
        readOnly
      />
      <Box width={50}>
        <Typography className={classes.ratingHover} align="left" width={50}>
          {movieDetails.vote_average}
        </Typography>
      </Box>
      <Grid container item direction="row">
        <Typography className={classes.smallMargin}>
          {movieDetails.release_date &&
            new Date(movieDetails.release_date).getFullYear()}
        </Typography>

        <Typography className={classes.smallMargin}>
          {movieDetails.genres.map((genre) => genre.name).join(", ")}
        </Typography>
        <Typography className={classes.smallMargin}>
          {movieDetails.runtime ? `${movieDetails.runtime} min` : ""}
        </Typography>
        <Typography className={classes.smallMargin}>
          <Link
            href={`${consts.urlIMDBTitle}${movieDetails.imdb_id}`}
            target="_blank"
            rel="noreferrer"
          >
            {movieDetails.imdb_id ? "IMDB" : ""}
          </Link>
        </Typography>
      </Grid>

      <Typography className={classes.overview}>
        {movieDetails.overview}
      </Typography>
    </>
  );
};

export default DetailProps;
