import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import api from "../services/api";
import {
  Box,
  Button,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import notFound from "../static/not-found-cube.jpg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  paper: {
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    position: "relative",
  },
  floatingButton: {
    margin: "2rem",
    position: "absolute",
    left: 0,
  },
  introImage: {
    overflow: "hidden",
    maxHeight: "60vh",
    height: "100%",
  },
  title: {
    width: "100%",
  },
  details: {
    padding: "3vh",
    height: "100%",
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
  sideImage: {
    width: "20rem",
  },
  smallMargin: {
    margin: ".5rem",
  },
});

const Detail = () => {
  const classes = useStyles();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  let history = useHistory();

  const handleBackButton = () => {
    history.push("/");
  };

  useEffect(() => {
    const movieId = location.pathname.split("/movie/")[1];
    const fetchMovie = async () => {
      let request = await api.get(`/movie/${movieId}`);
      setMovieDetails(request.data);
    };
    fetchMovie();
  }, [location.pathname]);

  return (
    <div className={classes.root}>
      {movieDetails ? (
        <>
          <Grid
            container
            alignItems="center"
            justify="center"
            variant="outlined"
          >
            <Grid item className={classes.paper}>
              <Button
                onClick={handleBackButton}
                size="large"
                variant="contained"
                className={classes.floatingButton}
                startIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
              <img
                className={classes.introImage}
                src={
                  movieDetails.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
                    : notFound
                }
                alt={
                  movieDetails.poster_path
                    ? movieDetails.title
                    : "Image unavailable"
                }
              />
            </Grid>
            <Grid
              container
              item
              direction="row"
              justify="center"
              alignItems="start"
            >
              <Grid
                container
                diretion="column"
                item
                justify="start"
                xs={12}
                sm
                className={classes.details}
              >
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
                  <Typography
                    className={classes.ratingHover}
                    align="left"
                    width={50}
                  >
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
                      href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
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
                <Button
                  onClick={handleBackButton}
                  size="large"
                  variant="contained"
                  className={classes.smallMargin}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <img
                  className={classes.sideImage}
                  src={
                    movieDetails.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                      : notFound
                  }
                  alt={
                    movieDetails.poster_path
                      ? movieDetails.title
                      : "Image unavailable"
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography>No Details Found</Typography>
      )}
    </div>
  );
};

export default Detail;
