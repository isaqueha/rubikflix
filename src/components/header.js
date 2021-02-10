import React from 'react';
import { Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    search: {
        margin: 10,
        width: '30rem',
    },
});

const Header = ({ handleSearchChange, handleRatingChange }) => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <TextField
                id="outlined-basic"
                className={classes.search}
                label="Search Movies"
                variant="outlined"
                onChange={(event) => handleSearchChange(event)}
            />
            <Grid >
                <Typography align='left' >
                    Filter by rating:
                </Typography>
                <Rating
                    name="half-rating"
                    defaultValue={5}
                    precision={0.5}
                    onChange={(event) => handleRatingChange(event)}
                />
            </Grid>
        </Grid>
    );
};

export default Header;
