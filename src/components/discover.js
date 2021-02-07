import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import api from '../services/api';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Discover = () => {
    const classes = useStyles();
    const [titles, setTitles] = useState([]);


    useEffect(() => {
        const fetchDiscovery = async () => {
            const discover = await api.get('discover/movie');
            setTitles(discover.data.results)
        };
        fetchDiscovery();
    }, [])

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            {titles.map((title, index) => (
                <Card className={classes.root} key={index}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={`https://image.tmdb.org/t/p/original/${title.poster_path}`}
                            title="Contemplative Reptile" />
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
