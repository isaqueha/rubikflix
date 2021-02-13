import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import api from "../services/api";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import notFound from "../static/not-found-cube.jpg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DetailProps from "./detailProps";
import consts from "../services/consts";

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
  details: {
    padding: "3vh",
    height: "100%",
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
            <PrimaryDetails movieDetails={movieDetails} />
            <SecondaryDetails movieDetails={movieDetails} />
          </Grid>
        </>
      ) : (
        <Typography>No Details Found</Typography>
      )}
    </div>
  );
};

const PrimaryDetails = ({ movieDetails }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.paper}>
      <BackButton className={classes.floatingButton} />
      <img
        className={classes.introImage}
        src={
          movieDetails.backdrop_path
            ? `${consts.urlImageOriginal}${movieDetails.backdrop_path}`
            : notFound
        }
        alt={
          movieDetails.poster_path ? movieDetails.title : "Image unavailable"
        }
      />
    </Grid>
  );
};

const SecondaryDetails = ({ movieDetails }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid
        container
        diretion="column"
        item
        justify="flex-start"
        xs={12}
        sm
        className={classes.details}
      >
        <DetailProps movieDetails={movieDetails} />
        <BackButton className={classes.smallMargin} />
      </Grid>
      <Grid item>
        <img
          className={classes.sideImage}
          src={
            movieDetails.poster_path
              ? `${consts.urlImageW500}${movieDetails.poster_path}`
              : notFound
          }
          alt={
            movieDetails.poster_path ? movieDetails.title : "Image unavailable"
          }
        />
      </Grid>
    </Grid>
  );
};

const BackButton = ({ className }) => {
  let history = useHistory();

  const handleBackButton = () => {
    history.push("/");
  };

  return (
    <Button
      onClick={handleBackButton}
      size="large"
      variant="contained"
      className={className}
      startIcon={<ArrowBackIcon />}
    >
      Back
    </Button>
  );
};

export default Detail;
