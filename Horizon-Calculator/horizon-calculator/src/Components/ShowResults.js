import React from 'react';

const ShowResults = props => {
    if (props.calculations.horizonGeographicalDistance === undefined) {
        return <p>The Result will be shown here</p>
    }
    return <p>On {props.planet.name}, at a hight of {props.calculations.observerHeight * 1000} meters above 
    sea level, the horizon is {props.calculations.horizonGeographicalDistance.toFixed(2)}km away!</p>
}

export default ShowResults;
