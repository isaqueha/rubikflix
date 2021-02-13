import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import notFoundImage from "../static/not-found-cube.jpg";

const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "34rem",
    margin: 10,
  },
  image: {
    height: "28rem",
  },
});

const paths = {
  discover: "/discover/movie",
  search: "/search/movie",
};

const Movies = ({ query, rating }) => {
  const classes = useStyles();
  const [titles, setTitles] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  let history = useHistory();

  const handleMovieClick = (title) => {
    history.push(`/movie/${title.id}`);
  };

  const fetchPath = async (path) => {
    let request = await api.get(path, {
      params: {
        query: query,
      },
    });
    setTitles(request.data.results);
  };

  useEffect(() => {
    let path = "";
    if (query !== "") {
      path = paths.search;
    } else {
      path = paths.discover;
    }

    fetchPath(path);
  }, [query]);

  useEffect(() => {
    if (rating === null) {
      setFilteredResults(titles);
      return;
    }
    let filteredResults = titles.filter(
      (title) => title.vote_average >= rating
    );
    setFilteredResults(filteredResults);
  }, [rating, titles]);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {filteredResults.length ? (
        filteredResults.map((title, index) => (
          <Card className={classes.card} key={index}>
            <CardActionArea onClick={() => handleMovieClick(title)}>
              <CardMedia
                className={classes.image}
                image={
                  title.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${title.poster_path}`
                    : notFoundImage
                }
                title={title.poster_path ? title.title : "Image unavailable"}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" noWrap>
                  {title.title}
                </Typography>
                <Rating
                  name="half-rating-read"
                  size="small"
                  value={title.vote_average / 2}
                  precision={0.1}
                  readOnly
                />
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Typography>No Movies Found</Typography>
      )}
    </Grid>
  );
};

export default Movies;
