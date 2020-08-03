import React from 'react';
import { Grid } from '@material-ui/core';
import { LatLon } from './location/LatLon';
import { LocationNotAllowed } from './location/LocationNotAllowed';





interface GeolocationCoordinates {
    accuracy: number;                   // accuracy in meters
    altitude: number|null;              // meters above sea level
    altitudeAccuracy: number|null;      // accuracy in meters
    heading: number|null;               // 0 - 360 (0 = north, 90 = east, 180 = south, 270 = west)
    latitude: number;                   // -90 to 90
    longitude: number;                  // -180 to 180
    speed: number|null;                 // m/s
}

interface WeatherState {
    position?: GeolocationCoordinates;
    weather: any;
}


export class Weather extends React.Component<{}, WeatherState> {
    constructor(props: any) {
        super(props);
        this.state = {
            position: undefined,
            weather: undefined
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords);
            this.setState({ position: position.coords });
            this.getWeather();
        }, (err) => {
            console.log(err);
        });
    }

    async getWeather() {
        let position = this.state.position;

        if (position) {
            console.log(`lat: ${position.latitude}, lon: ${position.longitude}`);
            console.log('querying weather..');
            try {
                const response = await fetch(`http://localhost:9999/weather?lat=${position.latitude}&lon=${position.longitude}`);
                const json = await response.json();

                this.setState({ weather: json })

                console.log(this.state.weather);
            } catch (err) {
                console.log(err);
            }
        }
    }

    render() {
        if (this.state.position) {
            return (
                <Grid container item className="red-border" justify="center">
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        <LatLon longitude={this.state.position.longitude}
                                latitude={this.state.position.latitude}
                                precision={6}></LatLon>
                    </Grid>
                    {this.state.weather && 
                        <div>
                            <p>{this.state.weather.latitude}</p>
                            <p>Temperature: {this.state.weather.currently.temperature}</p>
                        </div>
                    }
                </Grid>
            );
        } else {
            return (
                <Grid container item className="red-border" justify="center">
                    <LocationNotAllowed></LocationNotAllowed>
                </Grid>
            );
        }
    }
}