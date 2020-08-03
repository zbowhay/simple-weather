import React from 'react';

interface LatLonProps {
    latitude: number;
    longitude: number;
    precision: number;
}

export function LatLon(props: LatLonProps) {
    return (
        <h3>Lat: {props.latitude.toPrecision(props.precision)}, Lon: {props.longitude.toPrecision(props.precision)}</h3>
    );
}