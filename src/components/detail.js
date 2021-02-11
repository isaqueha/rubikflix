import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../services/api';
import {
  Box,
  Button,
  Grid,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import notFound from '../static/not-found-cube.jpg';

const useStyles = makeStyles({
  card: {
    width: '300px',
    height: '34rem',
    margin: 10,
  },
  img: {
    overflow: 'hidden',
    maxHeight: '60vh',
    margin: 0,
  },
  paper: {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
  },
  image: {
    maxHeight: '70vh',
    // width: '100%',
  },
  title: {
    width: '100%',
    margin: 5,
  },
  details: {
    padding: '3vh',
  },
});

const Detail = () => {
  const classes = useStyles();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  let history = useHistory();

  const handleBackButton = () => {
    history.push('/');
  };

  useEffect(() => {
    const movieId = location.pathname.split('/movie/')[1];
    const fetchMovie = async () => {
      let request = await api.get(`/movie/${movieId}`);
      setMovieDetails(request.data);
    };
    fetchMovie();
  }, [location.pathname]);

  return (
    <>
      <Button onClick={handleBackButton}>Back</Button>
      {movieDetails ? (
        <>
          <Grid
            container
            alignItems="center"
            justify="center"
            variant="outlined"
          >
            <Grid item className={classes.paper}>
              <img
                className={classes.img}
                src={
                  movieDetails.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
                    : notFound
                }
                alt={
                  movieDetails.poster_path
                    ? movieDetails.title
                    : 'Image unavailable'
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
                sm={8}
                className={classes.details}
              >
                <Typography className={classes.title} variant="h3">
                  {movieDetails.title}
                </Typography>
                <Grid container item direction="row">
                  <Typography>
                    {new Date(movieDetails.release_date).getFullYear()}
                  </Typography>
                  -
                  <Typography>
                    {movieDetails.genres.map((genre) => genre.name).join(', ')}
                  </Typography>
                  -<Typography>{movieDetails.runtime} min</Typography>-
                  <Typography>
                    <Link
                      href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      IMDB
                    </Link>
                  </Typography>
                </Grid>
                <Rating
                  name="half-rating-read"
                  size="large"
                  value={movieDetails.vote_average / 2}
                  precision={0.1}
                  readOnly
                />
                <Box width={50}>
                  <Typography align="left" width={50}>
                    {movieDetails.vote_average}
                  </Typography>
                </Box>
                <Typography>{movieDetails.overview}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img
                  className={classes.image}
                  src={
                    movieDetails.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`
                      : notFound
                  }
                  alt={
                    movieDetails.poster_path
                      ? movieDetails.title
                      : 'Image unavailable'
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <Typography>No Details Found</Typography>
      )}
    </>
  );
};

export default Detail;
