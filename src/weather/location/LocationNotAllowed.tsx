import React from 'react';
import { Grid } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import './LocationNotAllowed.scss';


export function LocationNotAllowed() {
    return (
        <Grid container justify="center" alignItems="center" className="locationNotAllowedContainer">
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <SentimentVeryDissatisfiedIcon id="lna-sad" style={{ fontSize: 80 }} ></SentimentVeryDissatisfiedIcon>
            </Grid>
            <Grid item>
                <h3>We can't tell you the weather if you don't let us know where you are!</h3>
            </Grid>
        </Grid>
    );
}