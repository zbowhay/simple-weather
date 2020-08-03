import React from 'react';
import './App.scss';
import { Grid } from '@material-ui/core';
import { Weather } from './weather/Weather';

function App() {

    return (
        <div className="app">

            <Grid container direction="row">
                <Grid item xs={1} sm={2} md={3} lg={4} className="empty-space no-border"></Grid>
                
                <Grid container item xs={10} sm={8} md={6} lg={4} className="full-height" alignItems="center">
                    <Weather></Weather>
                </Grid>

                <Grid item xs={1} sm={2} md={3} lg={4} className="empty-space no-border"></Grid>
            </Grid>

        </div>
    );
}

export default App;
