import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import api from '../services/api';

const useStyles = makeStyles({
    card: {
        width: '20rem',
        height: '34rem',
        margin: 5
    },
    image: {
        height: '30rem',
    },
});

const Discover = ({ path, query }) => {
    const classes = useStyles();
    const [titles, setTitles] = useState([]);


    useEffect(() => {
        const fetchDiscovery = async () => {
            const discover = await api.get(path, { params: { query: query } });
            setTitles(discover.data.results)
        };

        if (query !== '') {
            fetchDiscovery();
        } else {
            setTitles([])
        }
    }, [query, path])

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            {titles.map((title, index) => (
                <Card className={classes.card} key={index}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.image}
                            image={`https://image.tmdb.org/t/p/original/${title.poster_path}`}
                            title="Title" />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h3">
                                {title.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card >
            ))}
        </Grid>
    );
}

export default Discover;
