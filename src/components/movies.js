import React, { useEffect, useState } from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import api from '../services/api';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        width: '20rem',
        height: '34rem',
        margin: 5,
    },
    image: {
        height: '30rem',
    },
});

const Movies = ({ path, query }) => {
    const classes = useStyles();
    const [titles, setTitles] = useState([]);
    let history = useHistory();

    const handleMovieClick = () => {
        history.push('/movie');
    };

    useEffect(() => {
        const fetchPath = async () => {
            let request = await api.get(path, { params: { query: query } });
            setTitles(request.data.results);
        };
        fetchPath();
    }, [query, path]);

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            {titles.length ? (
                titles.map((title, index) => (
                    <Card className={classes.card} key={index}>
                        <CardActionArea onClick={handleMovieClick}>
                            <CardMedia
                                className={classes.image}
                                image={`https://image.tmdb.org/t/p/original/${title.poster_path}`}
                                title="Title"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h3">
                                    {title.title}
                                </Typography>
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
