import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";
import notFoundImage from "../static/not-found-cube.jpg";
import consts from "../services/consts";

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

const MovieCard = ({ title }) => {
  const classes = useStyles();
  let history = useHistory();

  const handleMovieClick = (title) => {
    history.push(`/movie/${title.id}`);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => handleMovieClick(title)}>
        <CardMedia
          className={classes.image}
          image={
            title.poster_path
              ? `${consts.urlImageW500}${title.poster_path}`
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
  );
};

export default MovieCard;
